import axios from "axios";

export const Api = axios.create({
    baseURL: "https://eldenring.fanapis.com/api",
});