import Axios, { AxiosRequestConfig } from "axios";

export const axios = Axios.create({
	baseURL: "http://localhost:4000",
});

// @ts-ignore
axios.interceptors.request.use(config => {
	return config;
});
axios.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		const message = error.response?.data?.message || error.message;
		console.log(message);
		return Promise.reject(error);
	},
);
