import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../Api/Api";
import { setUser } from "../../App/Slices/UserSlice";
import { useDispatch } from "react-redux";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(""); // State to hold error messages
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const HandleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await validateLogin(email,password);
			console.log(response);
			if (response.status === 200) {
				dispatch(setUser(response.data));
				const userData = response.data;
				localStorage.setItem(`user_${userData.id}`, JSON.stringify(response.data));
				localStorage.setItem('currentUserId', userData.id);
				const role  = response.data.role; // Extracting user role from the response

				// Redirect based on role
				switch (role) {
					case "ADMIN":
						navigate("/AdminLanding");
						break;
					case "LECTURER":
						navigate("/LecturerDashboard");
						break;
					case "DATA CAPTURE":
						navigate("/DataCaptureDashboard");
						break;
					case "MODERATOR":
						navigate("/ModeratorDashboard");
						break;
					case "STUDENT":
						navigate("/IndStudentCourses");
						break;
					case "ENROLLSTUDENT":
						navigate("/Classes");
						break;
					default:
						navigate("/Home"); // Default fallback
				}
			}
		} catch (error) {
			// Handle error (e.g., invalid credentials)
			setError("Invalid email or password. Please try again.");
			console.error(error);
		}
	};

	return (
		<div className="login-container">
			<div className="login-div">
				<h2 className="login-h2">Welcome Back</h2>
				<form className="login-form" onSubmit={HandleSubmit}>
					{error && <div className="error-message">{error}</div>}
					<div className="login-input-group">
						<label htmlFor="email">Email Address</label>
						<input
							className="login-placeholder-input"
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="Enter your email"
						/>
					</div>
					<div className="login-input-group">
						<label htmlFor="password">Password</label>
						<input
							className="login-placeholder-input"
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="Enter your password"
						/>
					</div>
					<div className="login-forgot-password">
						<a href="/ForgotPassword">Forgot Password?</a>
					</div>
					<button className="login-button" type="submit">
						Continue
					</button>
					{/* <div className="login-signup">
						Don&apos;t have an account? <a href="/Signup">Sign up</a>
					</div> */}
				</form>
			</div>
			<div className="login-right-div">
				<h1 className="login-right-div-h1">Certified Pro</h1>
				<p className="login-right-div-text">
					continue your journey toward top tech certifications like AWS and
					CompTIA. Elevate your skills and stay ahead in the tech world!
				</p>
			</div>
		</div>
	);
}

export default Login;