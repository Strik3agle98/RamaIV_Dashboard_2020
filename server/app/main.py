from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import scraper
from app import junction
import io
from starlette.responses import StreamingResponse
import numpy as np


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://web-app",
    "http://web-app:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/image/{id}")
async def get_image(id: int):
    image = scraper.get_cctv(id)
    return StreamingResponse(io.BytesIO(image), media_type="image/png")

@app.get("/junction/{id}")
async def get_junction(id: int):
    return junction.get_junction(id)