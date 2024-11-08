import React, { useEffect, useState } from "react";
import "./EditUser.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, deleteUser, updateUser } from "../../Api/Api.js";

export default function EditUser() {
    const links = [
        { path: "/AdminLanding", pathName: "Home" },
        { path: "/ManageUser", pathName: "Manage Users" },
        { path: "/ManageCourse", pathName: "Manage Courses" },
        { path: "/ManageClass", pathName: "Manage Classes" },
    ];

    const { userId } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userRole, setUserRole] = useState("");
    const [userTitle, setUserTitle] = useState(""); // New field for title
    const [userSurname, setUserSurname] = useState(""); // New field for surname
    const [userContactNumber, setUserContactNumber] = useState(""); // New field for contact number
    const [existingAvatar, setExistingAvatar] = useState(null);
    const [previewAvatar, setPreviewAvatar] = useState(null);

    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserById(userId);
                setUserData(response.data);
                setUserName(response.data.fullNames);
                setUserEmail(response.data.email);
                setUserRole(response.data.name || ""); 
                //setUserRole(response.data.role ? response.data.role.name : "");
                setUserTitle(response.data.title ||"");
                setUserSurname(response.data.surname);
                setUserContactNumber(response.data.contactNumber);
                setExistingAvatar(response.data.avatar || null);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [userId]);

    console.log(userData);

    // Handlers for user details
    const handleUserNameChange = (e) => setUserName(e.target.value);
    const handleUserEmailChange = (e) => setUserEmail(e.target.value);
    const handleUserRoleChange = (e) => setUserRole(e.target.value);
    const handleUserTitleChange = (e) => setUserTitle(e.target.value); // Handle title change
    const handleUserSurnameChange = (e) => setUserSurname(e.target.value); // Handle surname change
    const handleUserContactNumberChange = (e) => setUserContactNumber(e.target.value); // Handle contact number change

    // Update user data
    const payload = {
        email: userEmail,
        //password: "string",
        title: userTitle,
        fullNames: userName,
        surname: userSurname,
        contactNumber: userContactNumber,
        role: userRole,
        //courseIds: [ ]
    }

    const updateUserData = {
        userDetails: JSON.stringify(payload),
        profileImage: previewAvatar,
    }

    const handleUpdateUser = async (e) => {
        e.preventDefault();

        try{
            //console.log(updateUserData);
            await updateUser(userId, updateUserData)
        }catch(error) {
            console.log(error);
        }

        alert("User Updated...")
        navigate("/ManageUser");
    };

    const handleAvatarUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPreviewAvatar(e.target.files[0]); // Store the avatar file directly, no conversion to base64
        }
    };

    const handleRemoveUser = async () => {
        if (window.confirm("Are you sure you want to remove this user?")) {
            try {
                await deleteUser(userId);
                navigate("/ManageUser");
            } catch (error) {
                console.error("Error removing user:", error);
            }
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="edit-user-container">
            <Sidebar links={links} />
            <div className="edit-user-wrapper">
                <h1 className="edit-user-header">Edit User</h1>
                <form onSubmit={handleUpdateUser} className="edit-user-form">
                    <div className="edit-user-left">
                        <div className="edit-user-input-group">
                            <label htmlFor="userTitle">Title</label>
                            <select
                                id="userTitle"
                                value={userTitle}
                                onChange={handleUserTitleChange}
                                className="edit-user-input"
                                required
                            >
                                <option value="" disabled>Select Title</option>
                                <option value="Prof">Prof</option>
                                <option value="Dr">Dr</option>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                        </div>

                        <div className="edit-user-input-group">
                            <label htmlFor="userName">Full Names</label>
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={handleUserNameChange}
                                className="edit-user-input"
                                required
                            />
                        </div>

                        <div className="edit-user-input-group">
                            <label htmlFor="userSurname">Surname</label>
                            <input
                                type="text"
                                id="userSurname"
                                value={userSurname}
                                onChange={handleUserSurnameChange}
                                className="edit-user-input"
                                required
                            />
                        </div>

                        <div className="edit-user-input-group">
                            <label htmlFor="userEmail">Email</label>
                            <input
                                type="email"
                                id="userEmail"
                                value={userEmail}
                                onChange={handleUserEmailChange}
                                className="edit-user-input"
                                required
                            />
                        </div>

                        <div className="edit-user-input-group">
                            <label htmlFor="userContactNumber">Contact Number</label>
                            <input
                                type="tel"
                                id="userContactNumber"
                                value={userContactNumber}
                                onChange={handleUserContactNumberChange}
                                className="edit-user-input"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                required
                            />
                        </div>

                        <div className="edit-user-input-group">
                            <label htmlFor="userRole">Role</label>
                            <select
							name="role"
                            id="userRole"
							value={userRole}
							onChange={handleUserRoleChange}
							required
						>
                            <option value="" disabled>{userData.role}</option>
							<option value="LECTURER">Lecturer</option>
							<option value="STUDENT">Student</option>
							{/* <option value="ADMIN">Admin</option> */}
							<option value="DATA CAPTURE">Data Capture</option>
							<option value="MODERATOR">Moderator</option>
						</select>
                        </div>
                    </div>

                    <div className="edit-user-right">
                        <div className="edit-user-avatar-upload">
                            {existingAvatar && !previewAvatar ? (
                                <img
                                    src={existingAvatar}
                                    alt="Existing user avatar"
                                    className="edit-user-avatar-preview"
                                />
                            ) : previewAvatar ? (
                                <img
                                    src={URL.createObjectURL(previewAvatar)}
                                    alt="New Avatar Preview"
                                    className="edit-user-avatar-preview"
                                />
                            ) : (
                                <p>No avatar uploaded</p>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarUpload}
                                className="edit-user-avatar-input"
                            />
                        </div>
                        <div className="edit-user-buttons-div">
                            <button
                                type="submit"
                                className="edit-user-upload-button"
                            >
                                Update User
                            </button>
                            <button
                                onClick={handleRemoveUser}
                                className="edit-user-delete-button"
                            >
                                Delete User
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}