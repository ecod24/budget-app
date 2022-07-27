import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditTransaction(props) {
	const API = process.env.REACT_APP_API_URL;
	const { id } = useParams();
	const navigate = useNavigate();
	const [transaction, setTransaction] = useState({
		amount: 0,
		item_name: "",
		date: "",
		from: "",
		category: "",
	});
	useEffect(() => {
		//put current transaction in value for
		axios
			.get(`${API}/transactions/${id}`)
			.then((response) => {
				setTransaction(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id, API]);
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
			.put(`${API}/transactions/${id}`, transaction)
			.then((response) => {
				navigate(`/transactions/${id}`);
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
					<input
						id="amount"
						type="number"
						name="amount"
						onChange={handleChange}
						value={transaction.amount}
					/>
				</label>
				<label>
					Transaction Name:
					<input
						id="item_name"
						type="text"
						name="name"
						onChange={handleChange}
						value={transaction.item_name}
					/>
				</label>
				<label>
					Date:
					<input
						id="date"
						type="text"
						name="date"
						onChange={handleChange}
						value={transaction.date}
					/>
				</label>
				<label>
					From:
					<input
						id="from"
						type="text"
						name="from"
						onChange={handleChange}
						value={transaction.from}
					/>
				</label>
				<label>
					Category:
					<input
						id="category"
						type="text"
						name="category"
						onChange={handleChange}
						value={transaction.category}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
