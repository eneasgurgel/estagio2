import axios from "axios";
import jwt_decode from 'jwt-decode';

const API_URL = process.env.URL || "http://localhost:3000/api/v1/wallets/";
class AuthService {
  async login(data: object) {
    const response = await axios
          .post(API_URL + "login", data);
      if (response) {
        const info = jwt_decode(JSON.stringify(response))

          Object.assign(info, {accessToken: response.data})
          localStorage.setItem("user", JSON.stringify(info));
      }
      return response.data
  }
  logout() {
    localStorage.removeItem("user");
  }
  async register(data: object) {
    const register = await axios.post(API_URL, data);
    console.log(register)
    return register
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user')|| '{}');;
  }
}
export default new AuthService();