import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiConstants } from "../api/api_constants";
import custom_axios from "../axios/custom_axios";

import NavBar from "../components/NavBar";
import { getLoginInfo } from "../utils/LoginInfo";

const Manager = () => {
	const navigate = useNavigate();

	// get all todos not completed with respect to userid
	const cvProfile = async () => {
		const userId = getLoginInfo()?.userId;
		if (userId != null) {
			const response = await custom_axios.get(ApiConstants.CV.PROFILE, {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			});

			console.log(response.data);
		} else {
			toast.info("Sorry you are not authenticated");
			navigate("/");
		}
	};
	useEffect(() => {
		cvProfile();
	}, []);

	return (
		<>
			<NavBar></NavBar>
			<div className="main">
				<div className="container">
					<h1>Manager</h1>
					<div>
						<form>
							<input
								type="text"
								name="name"
								placeholder="Full Name"
							/>
							<input
								type="email"
								name="email"
								placeholder="Email"
							/>
							<input
								type="number"
								name="phone"
								placeholder="Number"
							/>
							<input
								type="submit"
								name="contact"
								className="form-submit"
								value="Contact"
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Manager;
