import axios from "axios";

const axiosApiClient = axios.create({
  baseURL: "http://localhost:3000",
});

export default axiosApiClient;
