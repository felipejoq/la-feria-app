import {articles} from "../data/dummy.data.js";
import {AuthService} from "./auth.service.js";

export class ArticlesService {

  static ARTICLES = [...articles];

  static async createArticle({article}) {

    const user = await AuthService.getUserById({id: article.user_id});

    return new Promise((resolve) => {
      setTimeout(() => {
        delete article.user_id;
        const newArticle = {
          ...article,
          slug: article.title.toLowerCase().replace(/ /g, '-') + Math.random(),
          id: articles.length + 1,
          user,
          category: {
            id: 1,
            title: 'general'
          },
          images: [
            {
              id: 1,
              url_img: article.url_img
            }
          ]
        }
        this.ARTICLES.unshift(newArticle);
        resolve(newArticle);
      }, 1000);
    });
  }

  static async getArticles({page, limit}) {
    if(!page || !limit) return this.ARTICLES;
    const start = (page - 1) * limit;
    const end = start + limit;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.ARTICLES.slice(start, end));
      }, 1000);
    });
  }

  static async getArticleBySlug({slug}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.ARTICLES.find(article => article.slug === slug));
      }, 1000);
    });
  }
}