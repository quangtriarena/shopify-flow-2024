import React, { useEffect } from "react";
import ProductApi from "../../apis/product.api.js";

function TestPage(props) {
	const getProducts = async () => {
		try {
			const res = await ProductApi.get();

			console.log("res", res);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);
	return <div>TestPage</div>;
}

export default TestPage;
