import axios from 'axios';
import authHeader from './authHeader';
const API_URL = process.env.URL || "http://wallets2.herokuapp.com/api/v1/wallets/";
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}
export default new UserService();