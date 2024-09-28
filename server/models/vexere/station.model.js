const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/database.config");

const StationModel = sequelize.define(
	"Station",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		address: {
			type: DataTypes.STRING,
		},
		province: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: "stations",
	}
);

module.exports = StationModel;
