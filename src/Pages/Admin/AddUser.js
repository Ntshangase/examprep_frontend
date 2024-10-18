import React, { useState } from "react";
import "./AddUser.css";
import "../../Styles/global.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
//import { useNavigate } from "react-router-dom";
import { createUser } from "../../Api/Api";

function AddUser() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const [addUser, setAddUser] = useState({
		//default state of addUser
		email: "",
		password: "",
		title: "",
		fullNames: "",
		surname: "",
		contactNumber: "",
		role: "",
	});

	const [selectedOption, setSelectedOption] = useState("");
	const [courseSearch, setCourseSearch] = useState(""); //to be moved
	const availableCourses = ["Aws", "Comptia", "Networking+", "Databases"]; // Dummy data for courses

	const handleAddUserInputChange = (event) => {
		const { name, value } = event.target;

		setAddUser((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFileChange = (e) => {
		//currently not in use waiting for updates from smizi.
		setAddUser({
			...addUser,
			picture: e.target.files[0],
		});
	};

	const payload = {
		email: addUser.email,
		password: generatePassword(12),
		title: addUser.title,
		fullNames: addUser.fullNames,
		surname: addUser.surname,
		contactNumber: addUser.contactNumber,
		role: addUser.role,
	};

	function generatePassword(length) {
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
		let password = "";
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			password += characters[randomIndex];
		}
		return password;
	}

	//console.log(generatePassword(12));

	const handleSubmit = (event) => {
		event.preventDefault();

		try {
			createUser(payload);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCourseSearch = (e) => {
		//to be moved
		setCourseSearch(e.target.value);
	};

	const handleSelectCourse = (course) => {
		//to be moved
		if (!addUser.selectedCourses.includes(course)) {
			setAddUser({
				...addUser,
				selectedCourses: [...addUser.selectedCourses, course],
			});
		}
	};

	const handleRemoveCourse = (course) => {
		//to be moved
		setAddUser({
			...addUser,
			selectedCourses: addUser.selectedCourses.filter((c) => c !== course),
		});
	};

	const handleOptionChange = (event) => {
		//for handling dropdown input correctly
		setSelectedOption(event.target.value);
	};

	//const navigate = useNavigate();

	return (
		<div className="add-user-page">
			<Sidebar links={links} />

			<div className="main-content">
				<h1 className="form-title">Add User</h1>
				<form className="add-user-form" onSubmit={handleSubmit}>
					{/* Title Field */}
					<div className="form-group">
						<label>Title</label>
						<select
							name="title"
							value={addUser.title}
							onChange={handleAddUserInputChange}
							required
						>
							<option value={selectedOption} onChange={handleOptionChange}>
								Select title
							</option>
							<option value="Prof">Prof</option>
							<option value="Dr">Dr</option>
							<option value="Mr">Mr</option>
							<option value="Ms">Ms</option>
							<option value="Mrs">Mrs</option>
						</select>
					</div>

					<div className="form-group">
						<label>Full Names</label>
						<input
							type="text"
							name="fullNames"
							placeholder="Enter Name"
							value={addUser.fullNames}
							onChange={handleAddUserInputChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Surname</label>
						<input
							type="text"
							name="surname"
							placeholder="Enter Surname"
							value={addUser.surname}
							onChange={handleAddUserInputChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="Enter email"
							value={addUser.email}
							onChange={handleAddUserInputChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Contact Number</label>
						<input
							type="tel"
							name="contactNumber"
							placeholder="Enter Contact Number"
							value={addUser.contactNumber}
							onChange={handleAddUserInputChange}
							pattern="[0-9]{10}"
							maxLength={10}
							required
						/>
					</div>

					<div className="form-group">
						<label>Role</label>
						<select
							name="role"
							value={addUser.role}
							onChange={handleAddUserInputChange}
							required
						>
							<option value={selectedOption} onChange={handleOptionChange}>
								Select role
							</option>
							<option value="LECTURER">Lecturer</option>
							<option value="STUDENT">Student</option>
							<option value="ADMIN">Admin</option>
							<option value="DATA CAPTURE">Data Capture</option>
							<option value="MODERATOR">Moderator</option>
						</select>
					</div>

					{/* Conditionally render the search field for Student, Data Capture, Moderator */}
					{(addUser.role === "Student" ||
						addUser.role === "DataCapture" ||
						addUser.role === "Moderator") && (
						<div className="form-group">
							<label>Search Courses</label>
							<input
								type="text"
								value={courseSearch}
								onChange={handleCourseSearch}
								placeholder="Search for courses"
							/>

							{courseSearch && (
								<ul className="add-user-course-list">
									{availableCourses
										.filter((course) =>
											course.toLowerCase().includes(courseSearch.toLowerCase())
										)
										.map((course, index) => (
											<li
												key={index}
												onClick={() => handleSelectCourse(course)}
											>
												{course}
											</li>
										))}
								</ul>
							)}

							<div className="add-user-selected-courses">
								{addUser.selectedCourses.map((course, index) => (
									<span key={index} className="add-user-selected-course">
										{course}
										<button
											type="button"
											className="remove-course-btn"
											onClick={() => handleRemoveCourse(course)}
										>
											&times;
										</button>
									</span>
								))}
							</div>
						</div>
					)}

					<div className="form-group">
						<label>Upload Image</label>
						<input
							type="file"
							name="picture"
							accept="image/*"
							onChange={handleFileChange}
							className="upload-image"
						/>
					</div>

					<button
						type="submit"
						//onClick={() => navigate("/ManageUser")}
						className="add-user-btn"
					>
						Add User
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddUser;
