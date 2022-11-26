import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<h1>Login to your Account.</h1>
			<form className="register-form" id="register-from">
				<div className="form-group">
					<input
						type="text"
						name="email"
						autoComplete="off"
						placeholder="Email"
					/>
					<input
						type="password"
						name="password"
						autoComplete="off"
						placeholder="Type Password"
					/>
					<input
						type="submit"
						name="signin"
						className="form-submit"
						value="Log In"
					/>
				</div>
				<NavLink to="/signup" className="signup-image-link">
					Create Account with Us.
				</NavLink>
			</form>
		</div>
	);
};

export default Login;
