const crypto = require("crypto");
const querystring = require("querystring");

const verifyHMAC = (req, res, next) => {
	// Kiểm tra HMAC
	const query = req.query;
	const { hmac, ...params } = query;
	const message = querystring.stringify(params);
	const generatedHash = crypto
		.createHmac("sha256", process.env.SHOPIFY_API_SECRET)
		.update(message)
		.digest("hex");

	if (generatedHash !== hmac) {
		return res.status(400).send("HMAC validation failed");
	}

	next();
};

module.exports = verifyHMAC;
