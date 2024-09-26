require("dotenv").config();
const env = require("./enviroments");
const axios = require("axios");

const axiosServer = axios.create({
	method: "post",
	baseURL: `https://${env.SHOP}/admin/api/${env.API_VER}/graphql.json`,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosServer.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosServer.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error);
	}
);
