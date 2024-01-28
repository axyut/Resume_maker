import { useEffect } from "react";
import { toast } from "react-toastify";
import { ApiConstants } from "../api/api_constants";
import custom_axios from "../axios/custom_axios";
import ProfilePic from "../assets/profile1.jpg";
import NavBar from "../components/NavBar";
import { getLoginInfo } from "../utils/LoginInfo";
import { useNavigate } from "react-router-dom";
import "../assets/cvPage.css";

export default function Cv() {
	const navigate = useNavigate();

	const cvProfile = async () => {
		const userId = getLoginInfo()?.userId;

		const token = `Bearer ${localStorage.getItem("token")}`;
		// console.log(token, userId);
		try {
			if (userId != null) {
				const response = await custom_axios.get(
					ApiConstants.CV.PROFILE,
					{
						headers: {
							Authorization: token,
						},
					}
				);

				//console.log(response.data);
			} else {
				localStorage.removeItem("token");
				toast.info("Sorry you are not authenticated");
				navigate("/");
			}
		} catch (error) {
			console.log(error);
			localStorage.removeItem("token");
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

			<div className="cvMain" id="cvPage">
				<div className="row">
					<div className="col-md-4">
						<img
							className="profilePic"
							src={ProfilePic}
							alt="user-profile"
						></img>
					</div>
					<div className="col-md-6">
						<div className="profile">
							<h5>name</h5>
							<h6>Frontend Developer</h6>
							<p className="profile-rating mt-3 mb-5">
								Ranking:<span>1/10</span>
							</p>
							<ul role="tablist">
								<li className="nav-item">
									<a
										className="nav-link active"
										id="edu"
										href="#edu"
										data-toggle="tab"
										role="tab"
									>
										Education
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="exp"
										href="#exp"
										data-toggle="tab"
										role="tab"
									>
										Experience
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
						<input
							type="submit"
							className="cv-edit"
							name="edit-button"
							value="Edit cV"
						></input>
					</div>
					<div className="row">
						<div>
							<p>WORK LINK</p>
						</div>
						<div
							className="tab-content profile-tab"
							id="myTabContent"
						>
							<div
								className="tab-pane fade show active"
								id="edu"
								role="tabpanel"
							>
								<div>
									<label>School:</label>
									<p>School name</p>
								</div>
							</div>
							<div
								className="tab-pane fade show active"
								id="exp"
								role="tabpanel"
							>
								<div>
									<label>Company:</label>
									<p>Company name</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<button
							onClick={() => {
								window.print();
							}}
						>
							Print
						</button>
					</div>
				</div>

				<div className="page">
					<div className="subpage">
						<p>This is first FirstPage</p>
						<p>This is first FirstPage</p>
						<p>This is first FirstPage</p>
						<p>This is first FirstPage</p>
						<p>This is first FirstPage</p>
						<p>This is first FirstPage</p>sd
					</div>
					<div className="subpage">
						<p>This is second secondPage</p>
						<p>This is second secondPage</p>
						<p>This is second secondPage</p>
						<p>This is second secondPage</p>
						<p>This is second secondPage</p>
						<p>This is second secondPage</p>
					</div>
				</div>
			</div>
		</>
	);
}
