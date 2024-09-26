const express = require("express");
const AuthRouter = express.Router();
const verifyHMAC = require("../../middlewares/verifyHMAC.js");
const { shopify } = require("../../configs/shopify.config");
const StoreModel = require("../../models/store.model.js");

AuthRouter.get("/", async (req, res) => {
	try {
		const shop = req.query.shop;

		if (!shop) {
			return res.status(400).send("Missing shop parameter.");
		}

		const authRoute = await shopify.auth.begin({
			shop: shopify.utils.sanitizeShop(req.query.shop, true),
			callbackPath: "/auth/callback",
			isOnline: false,
			rawRequest: req,
			rawResponse: res,
		});

		res.redirect(authRoute);
	} catch (error) {
		console.log("error auth", error);
	}
});

AuthRouter.get("/callback", verifyHMAC, async (req, res) => {
	try {
		const session = await shopify.auth.callback({ rawRequest: req, rawResponse: res });

		const {
			session: { shop, accessToken, scope },
		} = session;

		const entryStoreModel = await StoreModel.findOne({ where: { shop } });

		if (!entryStoreModel) {
			await StoreModel.create({
				shop,
				accessToken,
				scope,
			});
		} else if (entryStoreModel.accessToken !== accessToken) {
			// update access token
			await entryStoreModel.update({ accessToken });
		} else if (entryStoreModel.scope !== scope) {
			// update scope
			await entryStoreModel.update({ scope });
		}

		res.redirect(`/?shop=${req.query.shop}&host=${encodeURIComponent(req.query.host)}`); // redirect về bên trong admin
	} catch (error) {
		console.log("error auth/callback", error);
		res.status(500).send("Authentication failed");
	}
});

module.exports = AuthRouter;
