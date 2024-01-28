import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ErrorPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/");
		toast.error("Error 404 Page donot exist!\nAdios!");
	}, []);
	return <></>;
};

export default ErrorPage;
