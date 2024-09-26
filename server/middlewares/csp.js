const { shopify } = require("../configs/shopify.config");

const CSPMiddleware = (req, res, next) => {
	const shop = req.query.shop || (req.body && req.body.shop);

	if (shopify.config.isEmbeddedApp && shop) {
		res.setHeader(
			"Content-Security-Policy",
			`frame-ancestors https://${shop} https://admin.shopify.com;`
		);
	} else {
		// res.setHeader("Content-Security-Policy", `frame-ancestors 'none';`);
		res.setHeader("Content-Security-Policy", "frame-ancestors https://admin.shopify.com;");
	}

	next();
};

module.exports = CSPMiddleware;
