import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic
		console.log("Email:", email);
		console.log("Password:", password);
	};
	return (
		<div className="login-container">
			<div className="login-div">
				<h2 className="login-h2">Welcome Back</h2>
				<form className="login-form" onSubmit={handleSubmit}>
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
					<button className="login-button" onClick={() => navigate("/")}>
						Continue
					</button>
					<div className="login-signup">
						Don't have an account? <a href="/Signup">Sign up</a>
					</div>
				</form>
			</div>
			<div className="login-right-div">
				<h1 className="login-right-div-h1"> Africa College</h1>
				<p className="login-right-div-text">
					continue your journey toward top tech certifications like AWS and
					CompTIA. Elevate your skills and stay ahead in the tech world!
				</p>
			</div>
		</div>
	);
}

export default Login;
