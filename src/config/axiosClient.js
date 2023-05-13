import axios from "axios";

/* const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
}); */

const axiosClient = async (data) => {
  const response = await axios.post(
    `http://tienda-de-ropa-back.onrender.com/user/login`, data
  )
  return response
}

export default axiosClient;
