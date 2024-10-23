import React, { useEffect, useState } from "react";
import "./ManageUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getAllUser, deleteUser } from "../../Api/Api";

const ManageUser = () => {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const [allUsers, setAllUsers] = useState();
	const [loadingUsers, setLoadindUsers] = useState(true);

	useEffect( ()  =>  {

		const fetchUsers = async () => {

			try{
				const response = await getAllUser();
				setAllUsers(response.data);
			}catch(error) {
				console.log(error.message);
			}finally{
				setLoadindUsers(false);
			}
		}
		fetchUsers();
	}, []);

	const navigate = useNavigate();
	const handleEditUser = (userId) => {
		navigate(`/EditUser/${userId}`);
	}
	const handleRemoveUser = async (userId) => {
        if (window.confirm("Are you sure you want to remove this user?")) {
            try {
                await deleteUser(userId);
                navigate("/ManageUser");
            } catch (error) {
                console.error("Error removing user:", error);
            }
        }
    };

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
					{allUsers.map((user, index) => (
						<div key={index} className="user-card">
							<img src={`data:image/jpeg;base64,${user.profileImage}`} alt={user.fullNames} className="profile-pic" />
							<div className="user-details">
								<p>{user.fullNames}</p>
								<p>{user.role}</p>
								<div className="actions">
									<button className="view-btn" onClick={() => {handleEditUser(user.id)}} >👁</button>
									<FontAwesomeIcon icon={faTrash} onClick={() => {handleRemoveUser(user.id)}} />
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
