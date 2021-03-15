import Axios from "axios";

export const getImageAPI = (APIlocation: string) => (id: string) =>
  Axios.get(`${APIlocation}api/image/${id}`);

export const getJunctionAPI = (APIlocation: string) => (id: string) =>
  Axios.get(`${APIlocation}api/junction/${id}`);
