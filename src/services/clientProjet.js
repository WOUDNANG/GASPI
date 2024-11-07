import httpService from "./httpService";
import { URLS } from "./config";


export const getClientProjet = async () => {
    let res = await httpService.get( URLS.base + URLS.clientProjet)
    console.log(res)
    return res.data;
}
export const postClientProjet = async (data) => {
    let res = await httpService.post( URLS.base + URLS.clientProjet, data)
    return res.data;
}
export const putClientProjet = async (id) => {
    let res = await httpService.put( URLS.base + URLS.clientProjet, {id: id})
    return res.data;
}
export const deleteClientProjet = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.clientProjet + '/' + id)
    return res.data;
}