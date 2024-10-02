import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductApi from "../apis/product.api.js";

function Home(props) {
	const nav = useNavigate();

	const getProducts = async () => {
		try {
			const res = await ProductApi.get();
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<button onClick={() => nav("/")}>Home</button>
			<button onClick={() => nav("/test")}>Test</button>
			<button onClick={() => nav("/test/123")}>TestDetail</button>
			<button onClick={() => nav("/exitframe/123")}>Exitframe</button>
		</div>
	);
}

export default Home;
