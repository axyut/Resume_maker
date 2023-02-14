import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<div className="main-home">
			<h1>A CV Manager</h1>
			<div className="form-grp">
				<NavLink className="nav-link" to="/signup">
					Register to start
				</NavLink>
				<NavLink className="nav-link" id="seeyourcv" to="/cv">
					See your CV
				</NavLink>
			</div>
		</div>
	);
};

export default Home;
