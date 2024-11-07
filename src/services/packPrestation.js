import httpService from "./httpService";
import { URLS } from "./config";


export const getPackPrestation = async () => {
    let res = await httpService.get( URLS.base + URLS.packPrestation)
    console.log(res)
    return res.data;
}
export const postPackPrestation = async (data) => {
    let res = await httpService.post( URLS.base + URLS.packPrestation, data)
    return res.data;
}
export const putPackPrestation = async (id) => {
    let res = await httpService.put( URLS.base + URLS.packPrestation, {id: id})
    return res.data;
}
export const deletePackPrestation = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.packPrestation + '/' + id)
    return res.data;
}