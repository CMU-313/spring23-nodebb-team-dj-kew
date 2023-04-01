from typing import Union 
from fastapi import FastAPI
from app.predict import predict, Student, PredictionResult
from pydantic import BaseModel

app = FastAPI()

@app.post("/prediction")
async def prediction(student: Student) -> PredictionResult:
    return predict(student)

