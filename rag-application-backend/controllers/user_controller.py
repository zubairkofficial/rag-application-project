from fastapi import APIRouter, Request
from argon2 import PasswordHasher
from helpers.random_string import generate_random_string
from database import Database
import random
from helpers.password_reset_email import send_password_reset_email

password_hasher = PasswordHasher()
router = APIRouter()
db = Database()


@router.post('/login')
async def login(req: Request):
    payload = await req.json()
    user = await db.first("users", { "email": payload["email"] })

    if (user):
        try:
            password_hasher.verify(user["password"], payload["password"])
            token = generate_random_string(40)

            await db.insert("user_tokens", {
                "token": token, 
                "user_id": user["id"] 
            })

            return {
                "success": True, 
                "token": token,
                "type": user["type"],
                "name": user["name"]
            }
        except:
            pass
    
    return {
        "success": False, 
        "detail": "Invalid Credentials"
    }


@router.post("/logout")
async def logout(req: Request):
    try:
        auth_header = str(req.headers.get("authorization"))
        token = auth_header[6:].strip()
        deletion = db.delete("user_tokens", { "token": token })
        if (deletion is not None):
            await deletion
        return { "success": True }
    except Exception as e:
        print(e)
        return { "success": False }


@router.get("/login-status")
async def login_status(req: Request):
    try:
        auth_header = req.headers.get("authorization")
        token = auth_header[6:].strip()
        token_db = await db.first("user_tokens", { "token": token })

        if (token_db):
            user_id = token_db["user_id"]
            user = await db.first("users", { "id": user_id })
            return {
                "logged_in": True,
                "type": user["type"]
            }
        else:
            raise Exception("Invalid Token")
    except Exception as e:
        return {
            "logged_in": False
        }


@router.post("/signup")
async def signup(req: Request):
    payload = await req.json()

    await db.insert("users", {
        "name": payload["name"],
        "email": payload["email"],
        "password": password_hasher.hash(payload["password"]),
        "type": "consumer",
    })

    return { "success": True }


@router.post("/reset-password")
async def reset_password(req: Request):
    payload = await req.json()

    email = payload["email"]
    found_user = await db.first("users", {
        "email": email
    })

    if (not found_user):
        return { "success": False, "detail": "You are not signed up." }
    
    reset_code = str(random.randint(1000, 9999))
    await db.insert("reset_tokens", {
        "code": reset_code,
        "user_id": found_user["id"]
    })

    print("Sending. ding ding ding")
    email_sent = send_password_reset_email(email, reset_code)

    if (email_sent):
        return { "success": True }
    else:
        return { "success": False, "detail": "Cannot Send Email." }
    

@router.post("/reset-code-status")
async def reset_code_status(req: Request):
    payload = await req.json()

    user = await db.first("users", {
        "email": payload["email"],
    })

    if (user):
        code_found = await db.first("reset_tokens", {
            "user_id": user["id"],
            "code": payload["code"]
        })
    else:
        code_found = False

    if (code_found):
        return { "success": True }
    else:
        return { "success": False, "detail": "Invalid Code." }


@router.post("/set-password")
async def set_password(req: Request):
    payload = await req.json()

    user = await db.first("users", {
        "email": payload["email"],
    })

    if (user):
        code_found = await db.first("reset_tokens", {
            "user_id": user["id"],
            "code": payload["code"]
        })
    else:
        code_found = False

    if (code_found):
        await db.update("users", { "password": password_hasher.hash(payload["password"]) }, { "id": user["id"] })
        return { "success": True }
    else:
        return { "success": False, "detail": "Invalid Code." }