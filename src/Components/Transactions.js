import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";
import "./Transactions.css";
import axios from "axios";

export default function Transactions(props) {
	const { deleteEntry, API } = props;
	const [total, setTotal] = useState(0);
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
		setTotal(findTotal(data));
	}, []);
	const findTotal = (objectArr) => {
		return objectArr.reduce((prev, current) => {
			return prev.amount + current.amount;
		}, 0);
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
			<h2>
				Total: $<p className={moneyColor(total)}>{total}</p>
			</h2>
			{data.map((transaction, index) => {
				return (
					<Transaction
						key={index}
						index={index}
						data={transaction.date}
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
