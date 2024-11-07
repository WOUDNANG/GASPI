import httpService from "./httpService";
import { URLS } from "./config";

export const getProfessionnel = async () => {
  let res = await httpService.get(URLS.base + URLS.professionnel);
  console.log("service ", res);
  return res.data;
};
export const postProfessionnel = async (data) => {
  let res = await httpService.post(URLS.base + URLS.professionnel, data);
  return res.data;
};
export const putProfessionnel = async (id) => {
  let res = await httpService.put(URLS.base + URLS.professionnel, { id: id });
  return res.data;
};
export const deleteProfessionnel = async (id) => {
  let res = await httpService.delete(URLS.base + URLS.professionnel + '/' + id);
  return res.data;
};
