import { defineConfig } from "vite";
import "dotenv/config";
import react from "@vitejs/plugin-react";

const proxyOptions = {
	target: `http://127.0.0.1:8082`,
	changeOrigin: false,
	secure: true,
	ws: false,
};

export default defineConfig({
	plugins: [react()],
	server: {
		port: "5173",
		proxy: {
			// "/(/|(\\?.*)?$)": proxyOptions,
			"^/auth(/|(\\?.*)?$)": proxyOptions,
			"^/api(/|(\\?.*)?$)": proxyOptions,
			"^/webhooks(/|(\\?.*)?$)": proxyOptions,
		},
	},
});
