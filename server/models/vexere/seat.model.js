const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/database.config");

const SeatModel = sequelize.define(
	"Seat",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		status: {
			type: DataTypes.ENUM("available", "reserved", "sold"),
			defaultValue: "available",
		},
		vehicleId: {
			type: DataTypes.INTEGER,
			references: {
				model: "vehicles",
				key: "id",
			},
		},
	},
	{
		tableName: "seats",
	}
);

module.exports = SeatModel;
