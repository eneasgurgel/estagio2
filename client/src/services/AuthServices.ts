import axios from "axios";
import jwt_decode from 'jwt-decode';

const API_URL = process.env.URL || "https://wallets2.herokuapp.com/api/v1/wallets/";


class AuthService {
  async login(data: object) {
    const response = await axios
          .post(API_URL + "login", data);
      if (response.status === 200) {
        const info = jwt_decode(JSON.stringify(response))

        //@ts-ignore 
          Object.assign(info, {accessToken: response.data})
          localStorage.setItem("user", JSON.stringify(info));
      }
      return response
  }
  logout() {
    localStorage.removeItem("user");
  }
  async register(data: object) {
    const register = await axios.post(API_URL, data);
    return register
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user')|| '{}');;
  }
}
export default new AuthService();