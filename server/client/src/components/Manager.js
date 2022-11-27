import React from "react";

const Manager = () => {
	return (
		<div>
			<h1>Manager</h1>
			<form>
				<input type="text" name="name" placeholder="Full Name" />
				<input type="email" name="email" placeholder="Email" />
				<input type="number" name="phone" placeholder="Number" />
				<input
					type="submit"
					name="contact"
					className="form-submit"
					value="Contact"
				/>
			</form>
		</div>
	);
};

export default Manager;
