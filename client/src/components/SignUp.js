import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
	return (
		<div>
			<h1>SignUp with Us.</h1>
			<form className="register-form" id="register-from">
				<div className="form-group">
					<input
						type="text"
						name="name"
						autoComplete="off"
						placeholder="Full Name"
					/>
					<input
						type="text"
						name="email"
						autoComplete="off"
						placeholder="Email"
					/>
					<input
						type="text"
						name="phone"
						autoComplete="off"
						placeholder="Phone"
					/>
					<input
						type="password"
						name="password"
						autoComplete="off"
						placeholder="Type Password"
					/>
					<input
						type="submit"
						name="register"
						className="form-submit"
						value="Sign Up"
					/>
				</div>
				<NavLink to="/login" className="signup-image-link">
					I'm already registerd.
				</NavLink>
			</form>
		</div>
	);
};

export default SignUp;
