import axiosConfig from "../configs/axiosConfig.js";

const ShopApis = {
	get: async (queryParams) => {
		const url = "/shop";
		return await axiosConfig.get(url, { queryParams });
	},
};

export default ShopApis;
