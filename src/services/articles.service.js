import AxiosInterceptor from "../utils/api/axios.api.js";

export class ArticlesService {

  static async createArticle({article}) {
    try {
      return AxiosInterceptor.post('/api/v1/article', {...article});
    } catch (error) {
      return error;
    }
  }

  static async getArticlesByTerm({term, page, limit}) {
    try {
      return AxiosInterceptor.get('/api/v1/article/search', { params: { term, page, limit } });
    } catch (error) {
      return error;
    }
  }

  static async getArticles({page = 1, limit = 0}) {
    try {
      const params= {
        page,
        limit
      }
      return AxiosInterceptor.get('/api/v1/article', { params });
    } catch (error) {
      return error;
    }
  }

  static async getArticlesByUserId({userId, page = 1, limit = 10}) {
    try {
      return AxiosInterceptor.get(`/api/v1/article/user/${userId}`, { params: { page, limit } });
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