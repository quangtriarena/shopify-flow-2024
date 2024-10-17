require("dotenv").config("../.env");

module.exports = {
	apps: [
		{
			name: "server nodejs with shopify",
			script: "index.js",
			instances: "max",
			exec_mode: "cluster",
			env: {
				NODE_ENV: "production",
				PORT: process.env.PORT,

				SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
				SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
				SHOPIFY_APP_HOST: process.env.SHOPIFY_APP_HOST,
				SCOPES: process.env.SCOPES,
				SHOP: process.env.SHOP,
				API_VER: process.env.API_VER,

				DB_USER: process.env.DB_USER,
				DB_PASSWORD: process.env.DB_PASSWORD,
				DB_NAME: process.env.DB_NAME,
				DB_HOST: process.env.DB_HOST,
			},
		},
	],
};
