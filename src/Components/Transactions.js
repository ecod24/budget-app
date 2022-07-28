import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";
import "./Transactions.css";
import axios from "axios";

export default function Transactions(props) {
	const { deleteEntry, API } = props;
	//const [total, setTotal] = useState(0);
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/transactions`)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		// setTotal(findTotal(data));
	}, []);
	const findTotal = (objectArr) => {
		let total = 0;
		objectArr.forEach((item) => {
			total += parseInt(item.amount);
		});
		return total;
	};
	const moneyColor = (money) => {
		if (money > 1000) {
			return `green`;
		} else if (money >= 0) {
			return `yellow`;
		} else {
			return `red`;
		}
	};
	return (
		<div className="transactions">
			<h2 className={moneyColor(findTotal(data))}>Total: {findTotal(data)} </h2>
			{data.map((transaction, index) => {
				return (
					<Transaction
						key={index}
						index={index}
						date={transaction.date}
						amount={transaction.amount}
						from={transaction.from}
						item_name={transaction.item_name}
						category={transaction.category}
						deleteEntry={deleteEntry}
					/>
				);
			})}
		</div>
	);
}
