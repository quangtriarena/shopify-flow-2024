const { Sequelize } = require("sequelize");
const env = require("./enviroments");

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
	host: env.DB_HOST,
	dialect: "postgres",
	logging: false,
});

module.exports = sequelize;
