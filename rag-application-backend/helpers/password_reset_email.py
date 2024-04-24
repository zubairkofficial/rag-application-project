import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_password_reset_email(to_address: str, reset_code: str):
    # Email credentials
    smtp_server = "smtp.hostinger.com"
    smtp_port = 465  # SSL port
    from_address = "info@cyberifyportfolio.com"
    password = "Cyberify@123#"
    
    # Create MIME message
    message = MIMEMultipart()
    message["From"] = from_address
    message["To"] = to_address
    message["Subject"] = "Password Reset Code"

    # Create HTML email body
    html = f"""\
    <html>
      <head></head>
      <body>
        <p>Hi,<br>
           Here is your password reset code: <b>{reset_code}</b><br>
           Please use this code to reset your password.
        </p>
      </body>
    </html>
    """
    # Attach HTML part to the message
    message.attach(MIMEText(html, "html"))

    # Sending the email
    try:
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.login(from_address, password)  # Log in to the SMTP server
            server.send_message(message)  # Send email
            return True
    except Exception as e:
        print(f"Failed to send email: {e}")
        return False