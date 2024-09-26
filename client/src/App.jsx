import "@shopify/polaris/build/esm/styles.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Exitframe from "./pages/Exitframe";
import Home from "./pages/Home";

import Settings from "./pages/Settings";
import Template from "./pages/Template";
import { NavMenu } from "@shopify/app-bridge-react";

function App() {
	return (
		<div>
			<Router>
				<NavMenu>
					<Link to="/quick-start">Quick start</Link>
					<Link to="/template">Templates</Link>
					<Link to="/setting">Settings</Link>
				</NavMenu>

				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>

					<Route
						path="/template"
						element={<Template />}
					/>

					<Route
						path="/setting"
						element={<Settings />}
					/>

					<Route
						path="/exitframe/:shop"
						element={<Exitframe />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
