require("dotenv").config();

module.exports = {
	apps: [
		{
			name: "server nodejs with shopify",
			script: "index.js",
			instances: "max",
			exec_mode: "cluster",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
