import httpService from "./httpService";
import { URLS } from "./config";

export const getPersonne = async () => {
  let res = await httpService.get(URLS.base + URLS.personne);
  return res.data;
};

export const getPersonneById = async (id) => {
  let res = await httpService.get(`${URLS.base + URLS.personne}/${id}`);
  return res.data;
};

export const postPersonne = async (data) => {
  let res = await httpService.post(URLS.base + URLS.personne, data);
  return res.data;
};
export const putPersonne = async (id, data) => {
  let res = await httpService.put(`${URLS.base + URLS.personne}/${id}`, data);
  return res.data;
};
export const deletePersonne = async (id) => {
  let res = await httpService.delete(`${URLS.base + URLS.personne}/${id}`);
  return res.data;
};

export const getTotalClient = async () => {
  let totalClients = 0;
  let data = await getPersonne();
  data.map((personne) =>
    personne.metier == "CLIENT" ? (totalClients += 1) : null
  );
  return totalClients;
};
