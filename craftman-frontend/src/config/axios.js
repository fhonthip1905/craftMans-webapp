import axios from "axios";
import { getAccessToken, removeAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(config => {
    const accessToken = getAccessToken();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config; 
 }, 
    err => Promise.reject(err)
);
// จัดการ Token
axios.interceptors.response.use(
    value => Promise.resolve(value), 
    err => {
    if (err.response.status === 401){
        // refesh and got to login page after get error
        removeAccessToken();
        window.location.assign('/login');
        // stop process
        return;
    }
    return Promise.reject(err);
  }
);

export default axios;