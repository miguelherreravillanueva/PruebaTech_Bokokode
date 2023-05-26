import axios from "axios";

const API_URL = "https://technical-frontend-api.bokokode.com/api";

const postAll = async () => {
  const res = await axios.post(API_URL + "/products");
  return res.data;
};

const productsService = {
  postAll
};

export default productsService;
