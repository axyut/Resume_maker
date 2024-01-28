import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { getLoginInfo } from "../utils/LoginInfo";
import { toast } from "react-toastify";
import "../assets/Navbar.css";

const NavBar = () => {
	let navigate = useNavigate();
	const role = getLoginInfo()?.role;
	const firstName = getLoginInfo()?.firstName;

	const logout = async () => {
		localStorage.removeItem("token");
		toast.info("Logged Out!");
		navigate("/");
	};
	return (
		<nav className="navbar-whole">
			<div className="text-logo-container">
				<span
					id="nav-span"
					onClick={() => {
						navigate("/cv");
					}}
				>
					Resume Maker
				</span>
			</div>

			<div className="link-items">
				{/* <a
					onClick={() => {
						navigate("/docs");
					}}
				>
					{" "}
					Document
				</a> */}

				<a onClick={() => navigate("/manager")}>Manager</a>

				<div className="link-items-last">
					<a className="button-tans" onClick={logout}>
						LogOut
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
