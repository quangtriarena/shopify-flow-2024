import { Spinner } from "@shopify/polaris";
import React, { useEffect } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useParams } from "react-router-dom";

function Exitframe() {
	const app = useAppBridge();
	const { shop } = useParams();

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		let redirectUri = params.get("redirectUri");

		if (shop) {
			redirectUri = `https://${import.meta.env.VITE_SERVER_HOST}/auth?shop=${shop}`;
		}

		if (window["app-bridge"]) {
			if (window.shopify.environment.embedded == true) {
				const createApp = window["app-bridge"].default;
				const Redirect = window["app-bridge"].actions.Redirect;
				const app = createApp({
					apiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
					host: params.get("host"),
				});
				const redirect = Redirect.create(app);
				redirect.dispatch(Redirect.Action.REMOTE, decodeURIComponent(redirectUri));
			}
		} else {
			console.error("App Bridge không được tải từ CDN.");
		}
	}, [app]);

	const parentStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
	};

	return (
		<div
			className=""
			style={parentStyle}>
			<Spinner size="large" />
		</div>
	);
}

export default Exitframe;
