import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
	baseURL: "https://fakestoreapi.com/",
	headers: {
		"Content-Type": "application/json",
	},
};

export const axiosClassic = axios.create(options);
