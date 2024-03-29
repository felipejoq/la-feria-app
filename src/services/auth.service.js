import {users} from "../data/dummy.data.js";

export class AuthService {

  static async getUserById({id}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = users.find(user => user.id === id);
        resolve(user);
      }, 1000);
    });
  }

  static async login({email, password}) {
    const user = users.find(user => user.email === email.toLowerCase());
    localStorage.setItem('user', JSON.stringify(user))
    return user;
  }
}