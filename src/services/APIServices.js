import axios from "axios";

export const API = () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 120000,
    headers: {
      Accept: "application/json",
      Content: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    }
  });
};
