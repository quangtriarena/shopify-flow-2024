const express = require("express");
const AuthRouter = express.Router();
const verifyHMAC = require("../../middlewares/verifyHMAC.js");
const { shopify } = require("../../configs/shopify.config");
const StoreModel = require("../../models/store.model.js");
const { CookieNotFound, InvalidOAuthError, InvalidSession } = require("@shopify/shopify-api");

AuthRouter.get("/", async (req, res) => {
	try {
		const shop = req.query.shop;

		if (!shop) {
			return res.status(400).send("Missing shop parameter.");
		}

		return await shopify.auth.begin({
			shop: shopify.utils.sanitizeShop(req.query.shop, true),
			callbackPath: "/auth/callback",
			isOnline: false,
			rawRequest: req,
			rawResponse: res,
		});
	} catch (error) {
		console.error(`---> Error at /auth`, error);
		const { shop } = req.query;
		switch (true) {
			case error instanceof CookieNotFound:
				return res.redirect(`/exitframe/${shop.split(".")[0]}`);
				break;
			case error instanceof InvalidOAuthError:
			case error instanceof InvalidSession:
				res.redirect(`/auth?shop=${shop}`);
				break;
			default:
				res.status(500).send(error.message);
				break;
		}
	}
});

AuthRouter.get("/tokens", async (req, res) => {
	try {
		const callbackResponse = await shopify.auth.callback({
			rawRequest: req,
			rawResponse: res,
		});

		console.log("callbackResponse", callbackResponse);

		const { session } = callbackResponse;
		await sessionHandler.storeSession(session);

		const webhookRegisterResponse = await shopify.webhooks.register({
			session,
		}); //Register all webhooks with offline token
		console.dir(webhookRegisterResponse, { depth: null }); //This is an array that includes all registry responses.

		return await shopify.auth.begin({
			shop: session.shop,
			callbackPath: "/auth/callback",
			isOnline: true,
			rawRequest: req,
			rawResponse: res,
		});
	} catch (error) {
		console.log("error", error);
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
		console.error(`---> Error at /auth`, error);
		const { shop } = req.query;
		switch (true) {
			case error instanceof CookieNotFound:
				return res.redirect(`/exitframe/${shop.split(".")[0]}`);
				break;
			case error instanceof InvalidOAuthError:
			case error instanceof InvalidSession:
				res.redirect(`/auth?shop=${shop}`);
				break;
			default:
				res.status(500).send(error.message);
				break;
		}
	}
});

module.exports = AuthRouter;
