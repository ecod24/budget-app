import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div>
			<h1>You've reached.. the wrong page.</h1>
			<Link to="/">Go Home</Link>
		</div>
	);
}
