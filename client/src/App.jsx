import "@shopify/polaris/build/esm/styles.css";
import Routes from "./Routes";

const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", { eager: true });

function App() {
	return (
		<div>
			<Routes pages={pages} />
		</div>
	);
}

export default App;
