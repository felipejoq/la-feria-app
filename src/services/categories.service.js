import AxiosInterceptor from "../utils/api/axios.api.js";

export class CategoriesService {

  static async getAllCategories() {
    try {
      return AxiosInterceptor.get('/api/v1/category');
    } catch (error) {
      return error;
    }
  }

}