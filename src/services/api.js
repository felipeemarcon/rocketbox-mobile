import axios from "axios";

const api = axios.create({
  baseURL: "https://rocketbox-backend-api.herokuapp.com"
});

export default api;
