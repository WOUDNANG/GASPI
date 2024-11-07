import httpService from "./httpService";
import { URLS } from "./config";


export const getDecoration = async () => {
    let res = await httpService.get( URLS.base + URLS.get_decoration)
    console.log(res)
    return res.data;
}
export const postDecoration = async (data) => {
    let res = await httpService.post( URLS.base + URLS.post_decoration, data, 
        {headers: {'Content-Type': 'multipart/form-data'}}
    )
    return res.data;
}
export const putDecoration = async (id) => {
    let res = await httpService.put( URLS.base + URLS.decoration, {id: id})
    return res.data;
}
export const deleteDecoration = async (id) => {
    let res = await httpService.delete( URLS.base + URLS.decoration + '/' + id)
    return res.data;
}

export const getTotalDecoration = async () => {
    let data = await getDecoration()
    return data.length;
  }