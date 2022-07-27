import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router";
import NewTransaction from "./Pages/NewTransaction";
import Transactions from "./Components/Transactions";
import ShowTransaction from "./Pages/ShowTransaction";
import EditTransaction from "./Pages/EditTransaction";
const API = process.env.REACT_APP_API_URL;

function App() {
	//const [home, setHome] = useState("");
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/transactions`)
			.then((response) => {
				setData(response.data);
				//setHome(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [data]);

	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<Routes>
				<Route path="/" element={<Transactions data={data} />} />
				<Route path="/transactions/new" element={<NewTransaction />} />
				<Route path="/transactions/:id" element={<ShowTransaction />} />
				<Route path="/transactions/:id/edit" element={<EditTransaction />} />
			</Routes>
		</div>
	);
}

export default App;
