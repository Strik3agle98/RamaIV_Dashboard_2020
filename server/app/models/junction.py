from typing import Optional, Dict, List
from pydantic import BaseModel, EmailStr, Field
from bson import ObjectId


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


def JunctionHelper(junction):
    return {"id": str(junction['_id']),
            "lat": junction['lat'],
            "lng": junction['lng'],
            "camera": junction['camera'],
            "intersectionType": junction['intersectionType'],
            "orientation": junction['orientation'],
            "light": junction['light'], }


def AllJunctionHelper(junction):
    return {"id": str(junction['_id']),
            "lat": junction['lat'],
            "lng": junction['lng'],
            "camera": junction['camera'],
            "intersectionType": junction['intersectionType'],
            "orientation": junction['orientation'], }


class PhaseModel(BaseModel):
    north: int = Field(...)
    northRight: int = Field(...)
    northLeft: int = Field(...)
    northU: int = Field(...)
    east: int = Field(...)
    eastRight: int = Field(...)
    eastLeft: int = Field(...)
    eastU: int = Field(...)
    south: int = Field(...)
    southRight: int = Field(...)
    southLeft: int = Field(...)
    southU: int = Field(...)
    west: int = Field(...)
    westRight: int = Field(...)
    westLeft: int = Field(...)
    westU: int = Field(...)


class JunctionModel(BaseModel):
    name: str = Field(...)
    lat: float = Field(...)
    lng: float = Field(...)
    camera: List[int] = list()
    intersectionType: str = Field(...)
    orientation: str = Field(...)
    # 0: red, 1: green, 2: none
    light: Dict[str, PhaseModel] = dict()
