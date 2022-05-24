import axios from 'axios';
import authHeader from './authHeader';
import AuthServices from './AuthServices';
const API_URL = process.env.URL || "http://wallets2.herokuapp.com/api/v1/coins/";
class UserService {
 async getListOfCoins() {
    const user = await AuthServices.getCurrentUser()
    console.log(user)
    console.log(API_URL + user.id)
   const { data } = await axios.get(API_URL + user.id);
   return data
  }
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}
export default new UserService();