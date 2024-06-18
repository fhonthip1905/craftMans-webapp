import axios from "../config/axios";

const authApi = {};

authApi.register = (body) =>
  axios.post("http://localhost:4444/auth/register", body);

// Login
authApi.login = (body) => axios.post("/auth/login", body);
authApi.getAuthUser = () => axios.get('/auth/me')


export default authApi;
