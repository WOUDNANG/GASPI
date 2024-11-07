import httpService from "./httpService";
import { URLS } from "./config";


export const getCommentDecoration = async () => {
    let res = await httpService.get( URLS.base + URLS.commentDecoration)
    console.log(res)
    return res.data;
}
export const postCommentDecoration = async (data) => {
    let res = await httpService.post( URLS.base + URLS.commentDecoration, data)
    return res.data;
}
export const putCommentDecoration = async (id) => {
    let res = await httpService.put( URLS.base + URLS.commentDecoration, {id: id})
    return res.data;
}
export const deleteCommentDecoration = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.commentDecoration + '/' + id)
    return res.data;
}