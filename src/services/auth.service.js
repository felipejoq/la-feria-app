import AxiosInterceptor from "../utils/api/axios.api.js";

export class AuthService {

  static async getUserById({id}) {
    try {
      return AxiosInterceptor.get(`/api/v1/user/${id}`);
    } catch (error) {
      return error;
    }
  }

  static async login({email, password}) {
    try {
      return AxiosInterceptor.post('/api/v1/user/login', {email, password});
    } catch (error) {
      return error;
    }
  }

  static async register({name, email, password}) {
    try {
      return AxiosInterceptor.post('/api/v1/user/register', {name, email, password});
    } catch (error) {
      return error;
    }
  }
}