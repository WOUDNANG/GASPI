import httpService from "./httpService";
import { URLS } from "./config";


export const getPack = async () => {
    let res = await httpService.get( URLS.base + URLS.pack)
    console.log(res)
    return res.data;
}
export const postPack = async (data) => {
    let res = await httpService.post( URLS.base + URLS.pack, data)
    return res.data;
}
export const putPack = async (id) => {
    let res = await httpService.put( URLS.base + URLS.pack, {id: id})
    return res.data;
}
export const deletePack = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.pack + '/' + id)
    return res.data;
}