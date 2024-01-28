import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/App.css";

import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cv from "./pages/Cv";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Manager from "./pages/Manager";
import ProtectedRoute from "./protectedRoute";
import ErrorPage from "./pages/ErrorPage";
import Document from "./pages/Document";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<ToastContainer
					transition={Zoom}
					autoClose={2000}
					position={"top-right"}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable={false}
					pauseOnHover
					theme="dark"
				></ToastContainer>
				<Routes>
					<Route path="/login" element={<Login></Login>}></Route>
					<Route path="/signUp" element={<SignUp></SignUp>}></Route>

					<Route
						path="/cv"
						element={
							<ProtectedRoute>
								<Cv />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/manager"
						element={
							<ProtectedRoute>
								<Manager />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/docs"
						element={
							<ProtectedRoute>
								<Document />
							</ProtectedRoute>
						}
					/>

					{/* Default page active todos */}
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Cv />
							</ProtectedRoute>
						}
					></Route>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
