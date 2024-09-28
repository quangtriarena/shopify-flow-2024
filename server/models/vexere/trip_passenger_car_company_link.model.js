const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/database.config");

const TripPassengerCarCompanyLinkModel = sequelize.define(
	"TripPassengerCarCompanyLink",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		tripId: {
			type: DataTypes.INTEGER,
			references: {
				model: "trips",
				key: "id",
			},
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
		tableName: "trip_passenger_car_company_links",
	}
);

module.exports = TripPassengerCarCompanyLinkModel;
