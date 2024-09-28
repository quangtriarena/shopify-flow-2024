const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/database.config");

const TripModel = sequelize.define(
	"Trip",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		fromStation: {
			type: DataTypes.STRING,
		},
		toStation: {
			type: DataTypes.STRING,
		},
		startTime: {
			type: DataTypes.DATE,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
		},
	},
	{
		tableName: "trips",
	}
);

module.exports = TripModel;
