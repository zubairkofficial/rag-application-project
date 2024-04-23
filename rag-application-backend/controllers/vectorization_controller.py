from fastapi import APIRouter, UploadFile, File, HTTPException, Request
import uuid
import os

router = APIRouter()

@router.post("/upload-document")
async def upload_document(file: UploadFile = File(...)):
    try:
        # Generate a unique file name using uuid
        # Preserve the original file extension
        file_extension = os.path.splitext(file.filename)[1]
        unique_filename = f"{uuid.uuid4()}{file_extension}"
        
        # Save the uploaded file using the unique filename
        file_path = f"uploads/{unique_filename}"
        with open(file_path, "wb") as buffer:
            while chunk := await file.read(1024):  # Read the file content in chunks
                buffer.write(chunk)
                
        # Return a success response with the unique filename
        return {"filename": unique_filename, "detail": "File uploaded successfully."}
    except Exception as e:
        # Handle unexpected errors
        raise HTTPException(status_code=500, detail=str(e))
    

@router.post("/vectorize-document")
async def vectorize_document(req: Request):
    pass