import axios from "axios";

const axiosConfig = axios.create({
	baseURL: "/api",
	headers: {
		"Content-Type": "application/json",
	},
});

// Add a request interceptor
axiosConfig.interceptors.request.use(
	function (config) {
		return window.shopify.idToken().then((token) => {
			config.headers.set("authorization", "Bearer " + token);

			return config;
		});
	},
	function (error) {
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosConfig.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		if (error.response.headers.get("X-Shopify-API-Request-Failure-Reauthorize") === "1") {
			const authUrlHeader = error.response.headers.get(
				"X-Shopify-API-Request-Failure-Reauthorize-Url"
			);

			window.location.href = authUrlHeader;
		}
		return Promise.reject(error);
	}
);

export default axiosConfig;
