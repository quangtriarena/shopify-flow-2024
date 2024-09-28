const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/database.config");

const UserModel = sequelize.define(
	"User",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		phoneNumber: {
			type: DataTypes.STRING,
		},
		address: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		notes: {
			type: DataTypes.TEXT,
		},
		password: {
			type: DataTypes.STRING,
		},
		role: {
			type: DataTypes.ENUM(["user", "admin"]),
			defaultValue: "user",
		},
	},
	{
		tableName: "users",
	}
);

module.exports = UserModel;
