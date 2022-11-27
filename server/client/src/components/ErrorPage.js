import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
			<div id="notfound">
				<h1>404</h1>
				<h2>not Found!</h2>
			</div>
			<div>
				<NavLink to="/">Back to Home</NavLink>
			</div>
		</div>
	);
};

export default ErrorPage;
