import secrets
import base64

def generate_random_string(n: int):
    random_bytes = secrets.token_bytes(n)
    random_string = base64.urlsafe_b64encode(random_bytes).decode('utf-8')
    return random_string[:n]