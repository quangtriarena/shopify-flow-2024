const gulp = require("gulp");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const scopesFromEnv = process.env.SCOPES || "write_products";

function updateScopes(done) {
	fs.readFile("shopify.app.toml", "utf8", (err, data) => {
		if (err) {
			console.error("Lỗi khi đọc file shopify.app.toml:", err);
			return done();
		}

		const updatedData = data.replace(/scopes = "(.*)"/, `scopes = "${scopesFromEnv}"`);

		fs.writeFile("shopify.app.toml", updatedData, "utf8", (err) => {
			if (err) {
				console.error("Lỗi khi ghi file shopify.app.toml:", err);
			} else {
				console.log("Updated scopes trong shopify.app.toml");
			}
			done();
		});
	});
}

function updateClientId(done) {
	fs.readFile("shopify.app.toml", "utf8", (err, data) => {
		if (err) {
			console.error("Lỗi khi đọc file shopify.app.toml:", err);
			return done();
		}

		const updatedData = data.replace(
			/client_id = "(.*)"/,
			`client_id = "${process.env.SHOPIFY_API_KEY}"`
		);

		fs.writeFile("shopify.app.toml", updatedData, "utf8", (err) => {
			if (err) {
				console.error("Lỗi khi ghi file shopify.app.toml:", err);
			} else {
				console.log("Updated scopes trong shopify.app.toml");
			}
			done();
		});
	});
}

function updateAppUrl(done) {
	fs.readFile("shopify.app.toml", "utf8", (err, data) => {
		if (err) {
			console.error("Lỗi khi đọc file shopify.app.toml:", err);
			return done();
		}

		// Create a regular expression to match all instances of the old URL
		const regex = /https:\/\/(?:www\.)?app\.example\.com/g;

		// Replace all instances of the old URL with the new URL
		const updatedData = data.replace(regex, `https://${process.env.SHOPIFY_APP_HOST}`);

		fs.writeFile("shopify.app.toml", updatedData, "utf8", (err) => {
			if (err) {
				console.error("Lỗi khi ghi file shopify.app.toml:", err);
			} else {
				console.log("Updated scopes trong shopify.app.toml");
			}
			done();
		});
	});
}

exports.default = gulp.series(updateScopes, updateClientId, updateAppUrl);
