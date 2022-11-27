import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const sendToBackend = async (event) => {
		event.preventDefault();
		const { email, password } = user;
		const res = await fetch("/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const data = await res.json();

		if (data.status === 200) {
			window.alert(data.message);
		} else {
			window.alert(data.message);
		}
		navigate("/cv");
	};

	return (
		<div>
			<h1>Login to your Account.</h1>
			<form method="POST" className="register-form" id="register-from">
				<div className="form-group">
					<input
						type="text"
						name="email"
						value={user.email}
						onChange={handleChange}
						autoComplete="off"
						placeholder="Email"
					/>
					<input
						type="password"
						name="password"
						value={user.password}
						onChange={handleChange}
						autoComplete="off"
						placeholder="Type Password"
					/>
					<input
						type="submit"
						name="signin"
						onClick={sendToBackend}
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
