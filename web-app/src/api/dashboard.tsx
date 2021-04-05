import Axios from "axios";

export const getImageAPI = (APIlocation: string) => (id: string) =>
  Axios.get(`${APIlocation}image/${id}`);

export const getJunctionAPI = (APIlocation: string) => (id: string) =>
  Axios.get(`${APIlocation}junction/${id}`);

export const getIncidentAPI = () =>
  Axios.get("https://event.longdo.com/feed/json");
