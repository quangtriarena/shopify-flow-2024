import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AppProvider } from "@shopify/polaris";
import Routes from "./Routes.jsx";
const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", { eager: true });

function AppContainer() {
	return (
		<AppProvider>
			<BrowserRouter>
				<App />

				<Routes pages={pages} />
			</BrowserRouter>
		</AppProvider>
	);
}

export default AppContainer;
