import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
//const API = process.env.SERVER_URL;

// console.log(API);

function App() {
	const [home, setHome] = useState("");
	useEffect(() => {
		axios
			.get(`https://budget-app-api-ecod24.herokuapp.com`)
			.then((response) => {
				setHome(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [home]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<>
					<p>{home}</p>
				</>
			</header>
		</div>
	);
}

export default App;
