const path = require("path");

require("dotenv").config({ path: path.resolve(process.cwd() + "../../.env") });

const env = {
	SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
	SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
	SCOPES: process.env.SCOPES,
	HOST: process.env.SHOPIFY_APP_HOST,
	SHOP: process.env.SHOP,
	API_VER: process.env.API_VER,
	PORT: process.env.PORT,

	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME,
	DB_HOST: process.env.DB_HOST,
};

module.exports = env;
