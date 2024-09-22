import React, { useState } from "react";
import "./Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
					<button className="login-button" type="submit">
						Continue
					</button>
					<div className="login-signup">
						Don't have an account? <a href="/Signup">Sign up</a>
					</div>
				</form>
			</div>
			<div>
				<h1>Africa College</h1>
			</div>
		</div>
	);
}

export default Login;
