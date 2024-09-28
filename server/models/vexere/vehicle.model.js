const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/database.config");

const VehicleModel = sequelize.define(
	"Vehicle",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		passengerCarCompanyId: {
			type: DataTypes.INTEGER,
			references: {
				model: "passengerCarCompanies",
				key: "id",
			},
		},
	},
	{
		tableName: "vehicles",
	}
);

module.exports = VehicleModel;
