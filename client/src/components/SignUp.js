import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	});
	const handleInputs = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const sendToBackend = async (event) => {
		event.preventDefault();
		const { name, email, phone, password } = user;
		const res = await fetch("/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				phone,
				password,
			}),
		});
		const data = await res.json();

		if (data.status === 200) {
			window.alert(data.message);
		} else {
			window.alert(data.message);
		}
		navigate("/login");
	};

	return (
		<div>
			<h1>SignUp with Us.</h1>
			<form method="POST" className="register-form" id="register-from">
				<div className="form-group">
					<input
						type="text"
						name="name"
						autoComplete="off"
						value={user.name}
						onChange={handleInputs}
						placeholder="Full Name"
					/>
					<input
						type="text"
						name="email"
						autoComplete="off"
						value={user.email}
						onChange={handleInputs}
						placeholder="Email"
					/>
					<input
						type="number"
						name="phone"
						autoComplete="off"
						value={user.phone}
						onChange={handleInputs}
						placeholder="Phone"
					/>
					<input
						type="password"
						name="password"
						autoComplete="off"
						value={user.password}
						onChange={handleInputs}
						placeholder="Type Password"
					/>
					<input
						type="submit"
						name="register"
						className="form-submit"
						value="Sign Up"
						onClick={sendToBackend}
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
