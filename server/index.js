require("./models/index");

const express = require("express");
const app = express();
const cors = require("cors");
const verifyRequest = require("./middlewares/verifyToken.js");
const CSPMiddleware = require("./middlewares/csp.js");
const AuthRouter = require("./routes/Auth/index.js");
const AdminRoutes = require("./routes/Admin");
const WebhookRoutes = require("./routes/Webhooks");
const morgan = require("morgan");
const compression = require("compression");
const env = require("./configs/enviroments");
const path = require("path");
const fs = require("fs");

const STATIC_PATH =
	process.env.NODE_ENV === "production"
		? path.resolve(process.cwd(), "../client/dist")
		: path.resolve(process.cwd(), "../client");

const PORT = process.env.BACKEND_PORT;

const isDev = process.env.NODE_ENV === "development";

const START_SERVER = () => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(cors());

	//#region [middleware csp]
	app.use(CSPMiddleware);
	app.use(morgan("dev"));
	//#endregion

	app.use(express.static(STATIC_PATH, { index: false }));

	//#region [test]
	app.get("/status", (req, res) => {
		console.log("env", env);

		res.send("OK !");
	});
	//#endregion

	//#region [routes]
	app.use("/auth", AuthRouter);
	app.use("/api", verifyRequest, AdminRoutes);
	app.use("/webhooks", WebhookRoutes);
	//#endregion

	if (!isDev) {
		// production
		console.log("******************************");
		console.log("*          Production        *");
		console.log("******************************");
		console.log("");

		app.use(express.static(STATIC_PATH));
		app.use(compression());
		app.use("/*", (req, res) => {
			res.status(200)
				.set("Content-Type", "text/html")
				.send(fs.readFileSync(path.join(STATIC_PATH, "index.html")));
		});
	} else {
		// development
		console.log("******************************");
		console.log("*          Development       *");
		console.log("******************************");
		console.log("");

		app.use("/*", (req, res) => {
			return res
				.status(200)
				.set("Content-Type", "text/html")
				.send(fs.readFileSync(path.join(STATIC_PATH, "install.html")));
		});
	}

	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}...`);
	});
};

(async () => {
	try {
		console.log("WELCOME TO BACKEND APP");
		START_SERVER();
	} catch (error) {
		console.error(error);
		process.exit(0);
	}
})();
