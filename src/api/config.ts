import axios from "axios";

const baseURL = process.env.API_FIFA;

const apiFifa = axios.create({
  baseURL,
  headers: {
    "X-AUTH-TOKEN": process.env.API_KEY,
  },
});

export default apiFifa;
