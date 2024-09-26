const StoreModel = require("./store.model");
const ProductModel = require("./product.model");
const OptionSetModel = require("./optionset.model");
const ProductOptionSetLink = require("./productOptionSetLink.model");

const models = {
	StoreModel,
	ProductModel,
	OptionSetModel,
	ProductOptionSetLink,
};

Object.keys(models).forEach((key) => {
	models[key]
		.sync({ alter: true })
		.then(() => {
			console.log(`${key} table created successfully.`);
		})
		.catch((error) => {
			throw new Error("Failed to sync db: " + error.message);
		});
});

module.exports = models;
