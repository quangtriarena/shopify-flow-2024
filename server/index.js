require("dotenv").config();
require("./configs/database.config");
require("./models/index");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
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

const PORT = process.env.PORT || 3000;

const isDev = process.env.NODE_ENV === "development";

// console.log("process.cwd()", process.cwd());
// console.log("path", path.resolve(__dirname, "../client/dist", "index.html"));
// const html = fs.readFileSync(path.resolve(__dirname, "../client/dist", "index.html"), "utf8");

// console.log("html", html);

const START_SERVER = () => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cors());

	//#region [middleware csp]
	app.use(CSPMiddleware);
	app.use(morgan("dev"));
	//#endregion

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
		app.use(express.static(path.resolve(__dirname, "../client/dist")));
		app.use(compression());
		app.use("/*", (req, res, next) => {
			res.status(200)
				.set("Content-Type", "text/html")
				.send(fs.readFileSync(path.resolve(__dirname, "../client/dist", "index.html")));
		});
	}

	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}...`);
	});
};

(async () => {
	try {
		console.log("starting server...");
		START_SERVER();
	} catch (error) {
		console.error(error);
		process.exit(0);
	}
})();
