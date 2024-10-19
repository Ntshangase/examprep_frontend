import React, { useEffect, useState } from "react";
import "./ManageUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getAllUser } from "../../Api/Api";

const ManageUser = () => {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const users = [
		{ name: "John Smith", role: "Lecture", img: "/assets/images.jpeg" },
		{ name: "John Ngubo", role: "Lecturer", img: "/assets/images.jpeg" },
		{ name: "Mbali Zulu", role: "Data Capture", img: "/assets/images.jpeg" },
		{ name: "Sipho Mtshali", role: "Moderator", img: "/assets/images.jpeg" },
		{ name: "Simmi Zulu", role: "Lecturer", img: "/assets/images.jpeg" },
		{ name: "Mondli Zulu", role: "Data Capture", img: "/assets/images.jpeg" },
	];
	const [allUsers, setAllUsers] = useState();
	const [loadingUsers, setLoadindUsers] = useState(true);

	useEffect( ()  =>  {

		const fetchUsers = async () => {

			try{
				const response = await getAllUser();
				setAllUsers(response);
			}catch(error) {
				console.log(error.message);
			}finally{
				setLoadindUsers(false);
			}
		}
		fetchUsers();
	}, []);

	console.log(allUsers);

	if(loadingUsers){
		return <div>...Loading</div>
	}
	return (
		<div className="manage-user-admin-container">
			<Sidebar links={links} />
			<div className="manage-user-admin-content">
				<div className="manage-user-admin-heading">
					<h2 className="manage-user-admin-h2">Manage Users</h2>
					<div className="manage-user-link-div">
						<Link to="/AddUser">
							<FontAwesomeIcon icon={faPlusCircle} className="icon-plus" />
						</Link>
					</div>
				</div>

        <div className="manage-user-admin-search">
					<label htmlFor="manage-user-admin-search-input" className="manage-user-admin-search-label">
						Search:
					</label>
					<input
						id="manage-user-admin-search-input"
						type="text"
						className="manage-user-admin-search-input"
						placeholder="Enter User ID"
					/>
				</div>

				<div className="user-grid">
					{users.map((user, index) => (
						<div key={index} className="user-card">
							<img src={user.img} alt={user.name} className="profile-pic" />
							<div className="user-details">
								<p>{user.name}</p>
								<p>{user.role}</p>
								<div className="actions">
									<button className="view-btn">👁</button>
									<FontAwesomeIcon icon={faTrash} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ManageUser;
