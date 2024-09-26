const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database.config");

const ProductModel = sequelize.define(
	"Product",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},

		shop: {
			type: DataTypes.STRING,
			references: {
				model: "stores",
				key: "shop",
			},
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		},

		productId: {
			type: DataTypes.STRING,
		},

		productName: {
			type: DataTypes.TEXT,
		},

		productHandle: {
			type: DataTypes.TEXT,
		},

		objectFnVariants: {
			type: DataTypes.JSON,
			defaultValue: {},
		},

		globalOptionSets: {
			type: DataTypes.JSON,
			defaultValue: [],
		},

		displayOnStorefront: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	},
	{
		tableName: "products",
		timestamps: true,
		indexes: [
			{
				name: "idx_product_shop",
				fields: ["shop"],
			},
			{
				name: "idx_product_handle",
				fields: ["productHandle"],
			},
			{
				name: "idx_productId",
				fields: ["productId"],
			},
		],
	}
);

// ProductModel.associate = (models) => {
// 	ProductModel.belongsTo(models.Store, {
// 		foreignKey: "shop",
// 		targetKey: "shop",
// 		as: "store",
// 	});

// 	ProductModel.belongsToMany(models.OptionSet, {
// 		through: models.ProductOptionSetLink,
// 		foreignKey: "productId",
// 		otherKey: "optionId",
// 		as: "optionSets",
// 	});
// };

module.exports = ProductModel;
