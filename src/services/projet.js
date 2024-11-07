import httpService from "./httpService";
import { URLS } from "./config";


export const getProjet = async () => {
    let res = await httpService.get( URLS.base + URLS.projet)
    console.log(res)
    return res.data;
}
export const postProjet = async (data) => {
    let res = await httpService.post( URLS.base + URLS.projet, data)
    return res.data;
}
export const putProjet = async (id) => {
    let res = await httpService.put( URLS.base + URLS.projet, {id: id})
    return res.data;
}
export const deleteProjet = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.projet + '/' + id)
    return res.data;
}