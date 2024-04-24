from fastapi import FastAPI
from controllers.user_controller import router as user_router
from controllers.vectorization_controller import router as vectorization_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware, 
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router, prefix="/api")
app.include_router(vectorization_router, prefix="/api")


# uvicorn main:app --reload