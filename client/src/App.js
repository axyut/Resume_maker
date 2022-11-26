import React from "react";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Cv from "./components/Cv";
import Manager from "./components/Manager";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<Cv />} />
				<Route path="/contact" element={<Manager />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
}

export default App;
