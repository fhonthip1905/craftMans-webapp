import axios from "../config/axios";

const productApi = {};

// productApi.getBeerT = (data) => axios.post('/product',data);
productApi.getBeerT = (beertype) => axios.get(`/product/${beertype}`);
productApi.getBeerYour = (yourbeer) => axios.get(`/product/${yourbeer}`);
productApi.getProductDetail = (productName) =>
  axios.get(`/product/product/${productName}`);

export default productApi;
