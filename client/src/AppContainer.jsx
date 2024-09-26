import App from "./App.jsx";

import { AppProvider } from "@shopify/polaris";

function AppContainer() {
	return (
		<AppProvider>
			<App />
		</AppProvider>
	);
}

export default AppContainer;
