import httpService from "./httpService";
import { URLS } from "./config";


export const getCommentImmobilier = async () => {
    let res = await httpService.get( URLS.base + URLS.commentImmobilier)
    console.log(res)
    return res.data;
}
export const postCommentImmobilier = async (data) => {
    let res = await httpService.post( URLS.base + URLS.commentImmobilier, data)
    return res.data;
}
export const putCommentImmobilier = async (id) => {
    let res = await httpService.put( URLS.base + URLS.commentImmobilier, {id: id})
    return res.data;
}
export const deleteCommentImmobilier = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.commentImmobilier + '/' + id)
    return res.data;
}