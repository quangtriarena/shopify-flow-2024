const { shopify } = require("../configs/shopify.config");
const StoreModel = require("../models/store.model.js");

const reAuth = (res, shopUrl, hostUrl) => {
	let shop = shopUrl ? shopUrl.split(".")[0] : "undefined";
	let host = hostUrl ? hostUrl : "undefined";

	res.header("X-Shopify-API-Request-Failure-Reauthorize", "1");
	res.header(
		"X-Shopify-API-Request-Failure-Reauthorize-Url",
		`/exitframe/${shopUrl}?host=${host}`
	);

	return res.status(401).send({ success: false, message: "Nah I ain't serving this request" });
};

const verifyRequest = async (req, res, next) => {
	try {
		/**
		 * chỗ verify này có 2 mode:
		 * 1 là app embedded app
		 * 2 là app without embed
		 *
		 * *:  trường hợp không phải là embedded app thì luôn phải giữ 2 params shop và host trên query params trên mỗi request
		 */

		let shop = req.query.shop || req.headers["x-shopify-shop"];
		let host = req.headers["x-shopify-host"];

		const urlParams = new URLSearchParams(req.headers["referer"]);
		if (!host) host = urlParams.get("host");

		const authBearer = req.headers.authorization?.match(/Bearer (.*)/);

		if (!authBearer) {
			throw new Error("Authorization header not found");
		}

		const session = await shopify.session.decodeSessionToken(authBearer[1]);

		shop = session.dest.replace("https://", "");

		const sessionId = await shopify.session.getCurrentId({
			isOnline: true,
			rawRequest: req,
			rawResponse: res,
		});

		/**
		 * nếu không có sessionId thì gọi hàm reAuth để lấy sessionId mới
		 */
		if (!sessionId) {
			return reAuth(res, shop, host);
		}

		//#region [get access token from db]
		const entryStoreModel = await StoreModel.findOne({ where: { shop } });

		//#region [nếu không có data trong db thì thực hiện reAuth để update lại db]
		if (!entryStoreModel) {
			return reAuth(res, shop, host);
		}

		if (!entryStoreModel.accessToken) {
			return reAuth(res, shop, host);
		}

		console.log("entryStoreModel?.accessToken", entryStoreModel?.accessToken);

		res.locals.accessToken = entryStoreModel?.accessToken;
		res.locals.shop = shop;
		return next();

		//#endregion
	} catch (error) {
		console.log("verifyRequest error", error);

		// const shop = req.query.shop || req.headers["x-shopify-shop-domain"];

		// const reauthUrl = `/auth?shop=${shop}`;

		// res.status(401).send("Unauthorized");
	}
};

module.exports = verifyRequest;
