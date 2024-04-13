import AxiosInterceptor from "../utils/api/axios.api.js";

export class AuthService {

  static async getUserById({id}) {
    return AxiosInterceptor.get(`/api/v1/user/${id}`);
  }

  static async login({email, password}) {
    return AxiosInterceptor.post('/api/v1/user/login', {email, password});
  }

  static async register({name, email, password}) {
    return AxiosInterceptor.post('/api/v1/user/register', {name, email, password});
  }
}