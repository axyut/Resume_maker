import React, { useEffect } from "react";
import profilePic from "../images/profile1.jpg";
import { Navigate } from "react-router-dom";

const Cv = () => {
	// const navigate = useNavigate();
	//const [userData, setUserData] = useState();

	const callAboutPage = async () => {
		try {
			const res = fetch("/cvProfile", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			// data coming from /cv get
			const data = await res.json();
			console.log(data);

			if (res.status !== 200) {
				throw new Error("go away");
			}
		} catch (error) {
			console.log(error);
			<Navigate to="/404" />;
		}
	};

	useEffect(() => {
		callAboutPage();
	}, []);

	return (
		<div className="container emp-profile">
			<form method="GET">
				<div className="row">
					<div className="col-md-4">
						<img
							className="profilePic"
							src={profilePic}
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
				</div>
				<div className="row">
					<div>
						<p>WORK LINK</p>
					</div>
					<div className="tab-content profile-tab" id="myTabContent">
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
			</form>
		</div>
	);
};

export default Cv;
