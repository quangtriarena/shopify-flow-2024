require("@shopify/shopify-api/adapters/node");
const env = require("./enviroments");
const { shopifyApi, LATEST_API_VERSION } = require("@shopify/shopify-api");

const shopify = shopifyApi({
	apiKey: env.SHOPIFY_API_KEY,
	apiSecretKey: env.SHOPIFY_API_SECRET,
	scopes: env.SHOPIFY_API_SCOPES.split(","),
	hostName: env.HOST,
	isEmbeddedApp: true,
	apiVersion: LATEST_API_VERSION,
});

module.exports = { shopify };
