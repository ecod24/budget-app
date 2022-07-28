import "./App.css";
import axios from "axios";
import NavBar from "./Components/NavBar";
import { Route, Routes, useNavigate } from "react-router";
import NewTransaction from "./Pages/NewTransaction";
import Transactions from "./Components/Transactions";
import ShowTransaction from "./Pages/ShowTransaction";
import EditTransaction from "./Pages/EditTransaction";
import Home from "./Components/Home";
import ErrorPage from "./Pages/ErrorPage";
const API = process.env.REACT_APP_API_URL;

function App() {
	//const [home, setHome] = useState("");
	const navigate = useNavigate();

	const deleteEntry = (id) => {
		axios
			.delete(`${API}/transactions/${id}`)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/transactions"
					element={<Transactions API={API} deleteEntry={deleteEntry} />}
				/>
				<Route path="/transactions/new" element={<NewTransaction />} />
				<Route
					path="/transactions/:id"
					element={<ShowTransaction deleteEntry={deleteEntry} />}
				/>
				<Route path="/transactions/:id/edit" element={<EditTransaction />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
