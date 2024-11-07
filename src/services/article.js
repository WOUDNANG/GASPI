import httpService from "./httpService";
import { URLS } from "./config.js";

export const getArticles = async () => {
  let articles = await httpService.get(URLS.base + URLS.get_article);
  return articles.data;
};

export const postArticles = async (data) => {
  let articles = await httpService.post(URLS.base + URLS.post_article, data);
  return articles.data;
};

export const putArticles = async (id) => {
  let articles = await httpService.put(URLS.base + URLS.article, { id: id });
  return articles.data;
};

export const deleteArticles = async (id) => {
  let articles = await httpService.delete(URLS.base + URLS.article + '/' + id);
  return articles.data;
};

export const getTotalArticles = async () => {
  let data = await getArticles()
  return data.length;
}
