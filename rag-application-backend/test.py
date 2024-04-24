# from argon2 import PasswordHasher

# password_hasher = PasswordHasher()

# hashed_password = password_hasher.hash("password")

# print(hashed_password)

# doesVerify = password_hasher.verify("$argon2id$v=19$m=65536,t=3,p=4$KL1NGIvVzdyggTzOoO0K3A$VKFoFFIz7QsRRuPb3tEp0WBwckyCT9OSMuhMoHZ3h0I", "password")
# if (doesVerify):
#     print("Yesh!!!!! It verifies")

# from helpers.random_string import generate_random_string


# random_string = generate_random_string(40)
# print(random_string)

# from database import Database
# db = Database()
# db.insert("user_tokens", {
#     "token": "abc", 
#     "user_id": 1
# })
# print("Done")


from helpers.vector_db import text_to_vector

print(text_to_vector("Aslam Cheema is a web Developer"))