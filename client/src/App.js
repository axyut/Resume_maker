import React from "react";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
