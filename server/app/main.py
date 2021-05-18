from fastapi import FastAPI, Body, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from app.scraper import (get_cctv)
from app.junction import (get_const_junction, create_junction)
from app.models.junction import (JunctionModel, JunctionHelper, AllJunctionHelper)
import io
from starlette.responses import StreamingResponse
from app.database import (junction_collection)
from bson.objectid import ObjectId

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
    image = get_cctv(id)
    return StreamingResponse(io.BytesIO(image), media_type="image/png")


@app.get("/junction/{id}", response_description="Get individual junction with all detail")
async def get_junction(id: str):
    junction = await junction_collection.find_one({"_id": ObjectId(id)})
    if junction:
        junction = JunctionHelper(junction)
        return junction
    return JSONResponse(status_code=status.HTTP_404_NOT_FOUND)
    # return get_const_junction(id)

@app.get("/junction", response_description="Get every junction")
async def get_all_junction():
    junctions = list()
    async for junction in junction_collection.find():
        junctions.append(AllJunctionHelper(junction))
    return junctions
    # return get_junction(id)

@app.post("/junction", response_description="Add new junction", response_model=JunctionModel)
async def create_junction(junction: JunctionModel = Body(...)):
    # created_junction = create_junction(junction)
    # print(created_junction)
    junction = jsonable_encoder(junction)
    new_junction = await junction_collection.insert_one(junction)
    created_junction = await junction_collection.find_one({"_id": new_junction.inserted_id})
    created_junction = JunctionHelper(created_junction)
    created_junction = jsonable_encoder(created_junction)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_junction)

@app.post("/junction/{id}", response_description="Update junction")
async def update_junction(id: str, junction_update: JunctionModel = Body(...)):
    if not junction_update:
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST)
    junction = await junction_collection.find_one({"_id": ObjectId(id)})
    if junction:
        junction_update = jsonable_encoder(junction_update)
        updated_junction = await junction_collection.update_one({"_id": ObjectId(id)}, {"$set": junction_update})
        if updated_junction:
            return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)