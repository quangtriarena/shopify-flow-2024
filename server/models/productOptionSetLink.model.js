const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database.config");

const ProductOptionSetLink = sequelize.define(
	"productOptionSetLink",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},

		productId: {
			type: DataTypes.INTEGER,
			references: {
				model: "products",
				key: "id",
			},
		},

		optionId: {
			type: DataTypes.INTEGER,
			references: {
				model: "optionSets",
				key: "id",
			},
		},
	},
	{
		// Other model options go here
	}
);

module.exports = ProductOptionSetLink;
