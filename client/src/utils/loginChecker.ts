import AuthServices from "../services/AuthServices";

export default function checkLogin() {

    const currentUser = AuthServices.getCurrentUser()

    if(!currentUser.accessToken) return false
    if(Date.now() < currentUser.exp) return false
    return true


}