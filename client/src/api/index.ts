import axios, { AxiosInstance } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getHello = async () => {
  return await http.get("/");
};
