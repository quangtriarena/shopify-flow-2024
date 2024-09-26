import axiosConfig from "../configs/axiosConfig.js";

const ProductApi = {
	get: async (queryParams) => {
		const url = "/products";
		return await axiosConfig.get(url, { queryParams });
	},
};

export default ProductApi;
