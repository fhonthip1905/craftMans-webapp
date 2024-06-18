import axios from "../config/axios";

const adminApi = {};


adminApi.creatProduct = (data) => axios.post('/product',data);

export default adminApi;
