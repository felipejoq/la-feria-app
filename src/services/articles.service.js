import {articles} from "../data/dummy.data.js";
import {AuthService} from "./auth.service.js";
import AxiosInterceptor from "../utils/api/axios.api.js";

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
    if (!page || !limit) return this.ARTICLES;
    const params= {
      page,
      limit
    }
    return AxiosInterceptor.get('/api/v1/article', { params });

  }

  static async getArticleBySlug({slug}) {
    return AxiosInterceptor.get(`/api/v1/article/${slug}`);
  }
}