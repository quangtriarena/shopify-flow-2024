const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database.config");

const OPTION_SET_STATUSES = {
	READY: "READY",
	PENDING: "PENDING",
	DELETING: "DELETING",
	ARCHIVED: "ARCHIVED",
};

const OptionSetModel = sequelize.define(
	"optionSet",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},

		title: {
			type: DataTypes.STRING,
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

		options: {
			type: DataTypes.ARRAY(DataTypes.JSON),
			allowNull: false,
			defaultValue: [],
		},

		createdFrom: {
			type: DataTypes.STRING(),
		},

		status: {
			type: DataTypes.ENUM,
			values: Object.keys(OPTION_SET_STATUSES).map((key) => OPTION_SET_STATUSES[key]),
			defaultValue: OPTION_SET_STATUSES.READY,
		},
	},
	{ tableName: "optionSets", timestamps: true }
);

module.exports = OptionSetModel;
