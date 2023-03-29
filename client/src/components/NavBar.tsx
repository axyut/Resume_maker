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
						navigate("/");
					}}
				>
					<img className="logo" src={Logo} alt="todo-done-logo" />{" "}
					Resume Maker
				</span>
			</div>
			<div className="link-items-last">
				<a className="button-tans" onClick={logout}>
					Log Out
				</a>
			</div>
			<div className="link-items">
				<div className="link-items-middle">
					<a
						onClick={() => {
							navigate("/cv");
						}}
					>
						{" "}
						Cv
					</a>
					<a onClick={() => navigate("/manager")}>Manager</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
