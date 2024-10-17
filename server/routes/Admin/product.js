const express = require("express");
const env = require("../../configs/enviroments");
const axios = require("axios");
// const StoreModel = require("../../models/store.model.js");

const ProductRoutes = express.Router();

ProductRoutes.get("/", async (req, res) => {
	try {
		const { shop, accessToken } = res.locals;

		const query = {
			query: `query Products {
						products(first: 20) {
							nodes {
								title
							}
						}
					}
				`,
		};

		const _response = await axios({
			method: "post",
			url: `https://${shop}/admin/api/${env.API_VER}/graphql.json`,
			headers: {
				"X-Shopify-Access-Token": accessToken,
				"Content-Type": "application/json",
			},
			data: JSON.stringify(query),
		});

		// const query = {
		// 	query: `query {
		// 					shopLocales {
		// 					locale
		// 					primary
		// 					published
		// 				}
		// 			  }`,
		// };

		// const languageResponse = await axios({
		// 	url: `https://${shop}/admin/api/2024-07/graphql.json`,
		// 	method: "post",
		// 	headers: {
		// 		"X-Shopify-Access-Token": accessToken,
		// 		"Content-Type": "application/json",
		// 	},
		// 	data: JSON.stringify(query),
		// });

		return res.status(200).json({
			data: _response.data.data.products,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

module.exports = ProductRoutes;
