import React from "react";
import { Link } from "react-router-dom";
import "./Transaction.css";

export default function Transaction(props) {
	const { date, item_name, amount, index, deleteEntry } = props;
	return (
		<div className="single-transaction">
			<Link to={`/transactions/${index}`}>{item_name}</Link>
			<p>${amount}</p>
			<p>{date}</p>
			<Link to={`/transactions/${index}/edit`}>
				<button>Edit</button>
			</Link>
			<button
				onClick={() => {
					deleteEntry(index);
				}}
			>
				Delete
			</button>
		</div>
	);
}
