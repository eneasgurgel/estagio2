import axios from 'axios';
import authHeader from './authHeader';
import AuthServices from './AuthServices';
const API_URL = process.env.URL || "https://wallets2.herokuapp.com/api/v1/coins/";
class UserService {
 async getListOfCoins() {
    const user = await AuthServices.getCurrentUser()
    console.log(user)
    console.log(API_URL + user.id)
   const { data } = await axios.get(API_URL + user.id);
   return data
  }
  async addCoin(data: object) {
    const user = await AuthServices.getCurrentUser()
    return axios.post(`${API_URL}new/${user.id}`, data)
  }

  async getTransactions(coinId: string) {
    const { data } = await axios.get(`${API_URL}${coinId}/transactions`).catch((err) => { throw new Error(err)})
    return data
  }


}
export default new UserService();