import httpService from "./httpService";
import { URLS } from "./config";


export const getMedia = async () => {
    let res = await httpService.get( URLS.base + URLS.media)
    console.log(res)
    return res.data;
}
export const postMedia = async (data) => {
    let res = await httpService.post( URLS.base + URLS.media, data)
    return res.data;
}
export const putMedia = async (id) => {
    let res = await httpService.put( URLS.base + URLS.media, {id: id})
    return res.data;
}
export const deleteMedia = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.media + '/' + id)
    return res.data;
}