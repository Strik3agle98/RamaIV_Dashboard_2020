from fastapi import FastAPI
import cv2
import scraper
import io
from starlette.responses import StreamingResponse
import numpy as np


app = FastAPI()




@app.get("/image/{id}")
async def get_image(id: int):
    image = scraper.get_cctv(id)
    return StreamingResponse(io.BytesIO(image), media_type="image/png")
