require("dotenv").config();

const env = {
	SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
	SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
	SHOPIFY_API_SCOPES: process.env.SHOPIFY_API_SCOPES,
	HOST: process.env.HOST,
	SHOP: process.env.SHOP,
	API_VER: process.env.API_VER,

	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME,
	DB_HOST: process.env.DB_HOST,
};

module.exports = env;
