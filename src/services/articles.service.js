import {articles} from "../data/dummy.data.js";
import AxiosInterceptor from "../utils/api/axios.api.js";

export class ArticlesService {

  static ARTICLES = [...articles];

  static async createArticle({article}) {
    try {
      return AxiosInterceptor.post('/api/v1/article', {...article});
    } catch (error) {
      return error;
    }
  }

  static async getArticles({page = 1, limit = 0}) {
    try {
      if (!page || !limit) return this.ARTICLES;
      const params= {
        page,
        limit
      }
      return AxiosInterceptor.get('/api/v1/article', { params });
    } catch (error) {
      return error;
    }
  }

  static async getArticleBySlug({slug}) {
    try {
      return AxiosInterceptor.get(`/api/v1/article/${slug}`);
    } catch (error) {
      return error;
    }
  }
}