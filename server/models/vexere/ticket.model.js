const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/database.config");

const TicketModel = sequelize.define(
	"Ticket",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: "users",
				key: "id",
			},
		},
		tripId: {
			type: DataTypes.INTEGER,
			references: {
				model: "trips",
				key: "id",
			},
		},
	},
	{
		tableName: "tickets",
	}
);

module.exports = TicketModel;
