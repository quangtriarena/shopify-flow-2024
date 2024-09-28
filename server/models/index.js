const sequelize = require("../configs/database.config");

const StoreModel = require("./store.model");
const ProductModel = require("./product.model");
const OptionSetModel = require("./optionset.model");
const ProductOptionSetLink = require("./productOptionSetLink.model");

//#region [vexere]
const StationModel = require("./vexere/station.model");
const SeatModel = require("./vexere/seat.model");
const TicketModel = require("./vexere/ticket.model");
const VehicleModel = require("./vexere/vehicle.model");
const TripModel = require("./vexere/trip.model");
const TripPassengerCarCompanyLinkModel = require("./vexere/trip_passenger_car_company_link.model");
const PassengerCarCompanyModel = require("./vexere/passenger_car_company.model");
const UserModel = require("./vexere/user.model");
//#endregion

const models = {
	StoreModel,
	ProductModel,
	OptionSetModel,
	ProductOptionSetLink,

	UserModel,
	TripModel,
	StationModel,
	VehicleModel,
	SeatModel,
	TicketModel,
	TripPassengerCarCompanyLinkModel,
	PassengerCarCompanyModel,
};

(async () => {
	try {
		/**
		 * check connection to the database
		 */
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");

		/**
		 * sync all models
		 */
		await sequelize.sync({ alter: true });
		console.log("All tables have been synchronized successfully.");
	} catch (error) {
		console.error("Failed to sync db:", error.message);
	}
})();

module.exports = models;
