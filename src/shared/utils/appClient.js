import axios from 'axios';

// const baseURL = 'https://dummyjson.com';
// Nếu dùng link trên phải đổi product thành product.products trong file Product.js nữa
const baseURL = 'http://localhost:3000';

const appClient = () => {
  const axiosInstance = axios.create({
    baseURL,
    responseType: 'json',
  });
  return axiosInstance;
};

export default appClient;
