const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database.config");

const StoreModel = sequelize.define(
	"Store",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		shop: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		accessToken: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		scope: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		webhook: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		globalSetting: {
			type: DataTypes.JSON,
			allowNull: true,
			defaultValue: {},
		},
		languages: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
			defaultValue: [],
		},
	},
	{
		tableName: "stores",
		timestamps: true,
		indexes: [
			{
				name: "idx_store_shop",
				fields: ["shop"],
			},
		],
	}
);

// StoreModel.associate = (models) => {
// 	StoreModel.hasMany(models.Product, {
// 		foreignKey: "shop",
// 		sourceKey: "shop",
// 		as: "products",
// 	});

// 	StoreModel.hasMany(models.OptionSet, {
// 		foreignKey: "shop",
// 		sourceKey: "shop",
// 		as: "optionSets",
// 	});
// };

module.exports = StoreModel;
