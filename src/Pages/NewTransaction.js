import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function NewTransaction(props) {
	const API = process.env.REACT_APP_API_URL;
	const navigate = useNavigate();
	const [transaction, setTransaction] = useState({
		amount: 0,
		item_name: "",
		date: "",
		from: "",
		category: "",
	});
	const handleChange = (event) => {
		setTransaction({
			...transaction,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// put into backend/transactions
		axios
			.post(`${API}/transactions`, transaction)
			.then((response) => {
				navigate("/transactions");
			})
			.catch((error) => {
				console.log(error);
			});
		// go to frontend/transactions
	};
	return (
		<div className="transaction-form">
			<form onSubmit={handleSubmit}>
				<label>
					Amount:
					<input id="amount" type="number" name="amount" onChange={handleChange} />
				</label>
				<label>
					Transaction Name:
					<input id="item_name" type="text" name="name" onChange={handleChange} />
				</label>
				<label>
					Date:
					<input id="date" type="text" name="date" onChange={handleChange} />
				</label>
				<label>
					From:
					<input id="from" type="text" name="from" onChange={handleChange} />
				</label>
				<label>
					Category:
					<input id="category" type="text" name="category" onChange={handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
