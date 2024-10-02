import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AppProvider } from "@shopify/polaris";

function AppContainer() {
	return (
		<AppProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	);
}

export default AppContainer;
