import React from "react";
import { Link } from "react-router-dom";
export default function Transaction(props) {
	const { date, item_name, amount, index } = props;
	return (
		<div className="single-transaction">
			<Link to={`/transactions/${index}`}>
				<h2>{item_name}</h2>
                <p>${amount}</p>
				<h4>{date}</h4>
			</Link>
		</div>
	);
}
