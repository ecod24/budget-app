import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
	return (
		<nav>
			<Link to="/">All Transactions</Link>
			<Link to="/transactions/new">New Transaction</Link>
		</nav>
	);
}
