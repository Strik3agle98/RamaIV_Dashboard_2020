import motor.motor_asyncio
import os

MONGO_DETAILS = os.getenv("MONGO_ADDRESS") or "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.ramaiv

junction_collection = database.get_collection("junctions")