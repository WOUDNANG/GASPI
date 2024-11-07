import httpService from "./httpService";
import { URLS } from "./config";

export const getImmobilier = async () => {
  let res = await httpService.get(URLS.base + URLS.get_immobilier);
  return res.data;
};
export const postImmobilier = async (data) => {
  let res = await httpService.post( URLS.base + URLS.post_immobilier, data, 
    {headers: {'Content-Type': 'multipart/form-data'}}
  )
  return res.data;
};
export const putImmobilier = async (id) => {
  let res = await httpService.put(URLS.base + URLS.immobilier, { id: id });
  return res.data;
};
export const deleteImmobilier = async (id) => {
  let res = await httpService.delete(URLS.base + URLS.get_immobilier + '/' + id, );
  return res.data;
};

export const getTotalImmobilier = async () => {
  let data = await getImmobilier()
  return data.length;
}
