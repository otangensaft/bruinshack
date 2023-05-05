import Axios, { AxiosRequestConfig } from "axios";

export const axios = Axios.create({
	baseURL: "https://swapi.dev/api",
});

// @ts-ignore
axios.interceptors.request.use(config => {
	console.log("hello");
	return config;
});
