import React from "react";
import Transaction from "./Transaction";

export default function Transactions(props) {
	const { data } = props;
	return (
		<div className="transactions">
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
					/>
				);
			})}
		</div>
	);
}
