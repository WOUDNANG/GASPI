import httpService from "./httpService";
import { URLS } from "./config";


export const getPrestation = async () => {
    let res = await httpService.get( URLS.base + URLS.prestation)
    console.log(res)
    return res.data;
}
export const postPrestation = async (data) => {
    let res = await httpService.post( URLS.base + URLS.prestation, data)
    return res.data;
}
export const putPrestation = async (id) => {
    let res = await httpService.put( URLS.base + URLS.prestation, {id: id})
    return res.data;
}
export const deletePrestation = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.prestation + '/' + id)
    return res.data;
}