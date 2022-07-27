import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ShowTransaction() {
	const { id } = useParams();
	const [transaction, setTransaction] = useState({});
	useEffect(() => {
		axios
			.get(`https://budget-app-api-ecod24.herokuapp.com/transactions/${id}`)
			.then((response) => {
				setTransaction(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
	return (
		<div>
			<h1>{transaction.item_name}</h1>
			<h2>${transaction.amount}</h2>
			<h3>{transaction.date}</h3>
			<h4>{transaction.from}</h4>
			<h5>{transaction.category}</h5>
		</div>
	);
}
