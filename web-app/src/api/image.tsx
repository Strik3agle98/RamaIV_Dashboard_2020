import Axios from "axios";

export const getImageAPI = (APIlocation:string) => (id:string) =>
  Axios.get(`${APIlocation}/image/${id}`);
