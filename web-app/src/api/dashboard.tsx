import Axios from "axios";
import type { junctionType } from "../Create";

export const getImageAPI = (APIlocation: string) => (id: string) =>
  Axios.get(`${APIlocation}image/${id}`);

export const getJunctionAPI = (APIlocation: string) => (id: string) =>
  Axios.get(`${APIlocation}junction/${id}`);

export const getIncidentAPI = () =>
  Axios.get("https://event.longdo.com/feed/json");

export const createJunctionAPI =
  (APIlocation: string) => (payload: junctionType) =>
    Axios.post(`${APIlocation}junction`, payload);

export const editJunctionAPI =
  (APIlocation: string) => (id: string) => (payload: junctionType) =>
    Axios.post(`${APIlocation}junction/${id}`, payload);
