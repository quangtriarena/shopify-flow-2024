import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: "3005",
		proxy: {
			"^/auth(/|(\\?.*)?$)": "http://arena-app-tt.ap.ngrok.io:3000",
			"^/api(/|(\\?.*)?$)": "http://arena-app-tt.ap.ngrok.io:3000",
			"^/webhooks(/|(\\?.*)?$)": "http://arena-app-tt.ap.ngrok.io:3000",
		},
	},
});
