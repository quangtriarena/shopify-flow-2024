const axios = require("axios");
const express = require("express");

const ShopRoutes = express.Router();

ShopRoutes.get("/", async (req, res) => {
	try {
		const { shop, accessToken } = res.locals;

		const query = {
			query: `query Shop {
						shop {
							id
							name
						}
					}`,
		};

		const _response = await axios({
			method: "post",
			url: `https://49-tri-personalize.myshopify.com/admin/api/2024-07/graphql.json`,
			headers: {
				"X-Shopify-Access-Token": accessToken,
				"Content-Type": "application/json",
			},
			data: JSON.stringify(query),
		});

		return res.status(200).json({ data: _response.data.data.shop });
	} catch (error) {
		console.log("error", error);
	}
});

module.exports = ShopRoutes;
