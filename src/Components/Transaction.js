import React from "react";
import { Link } from "react-router-dom";
export default function Transaction(props) {
	const { date, item_name, amount, index, deleteEntry } = props;
	return (
		<div className="single-transaction">
			<Link to={`/transactions/${index}`}>
				<h2>{item_name}</h2>
			</Link>
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
