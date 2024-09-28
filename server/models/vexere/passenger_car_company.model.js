const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/database.config");

const PassengerCarCompanyModel = sequelize.define(
	"PassengerCarCompany",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		image: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.TEXT,
		},
	},
	{
		tableName: "passengerCarCompanies",
	}
);

module.exports = PassengerCarCompanyModel;
