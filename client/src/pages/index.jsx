import { useNavigate } from "react-router-dom";

function Home(props) {
	const nav = useNavigate();

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
