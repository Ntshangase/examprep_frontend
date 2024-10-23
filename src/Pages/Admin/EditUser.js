import React, { useEffect, useState } from "react";
import "./EditUser.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { getData, updateUser, deleteData } from "../../Api/Api";

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
    const [existingAvatar, setExistingAvatar] = useState(null);
    const [previewAvatar, setPreviewAvatar] = useState(null);

    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getData(`/api/users/${userId}`);
                setUserData(response.data);
                setUserName(response.data.userName);
                setUserEmail(response.data.userEmail);
                setUserRole(response.data.userRole);
                setExistingAvatar(response.data.avatar || null); // Set initial existing avatar if available
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [userId]);

    // Handlers for user details
    const handleUserNameChange = (e) => setUserName(e.target.value);
    const handleUserEmailChange = (e) => setUserEmail(e.target.value);
    const handleUserRoleChange = (e) => setUserRole(e.target.value);

    // Update user data
    const handleUpdateUser = async () => {
        const payload = {
            userName,
            userEmail,
            userRole,
        };

        const updateData = {
            userDetails: JSON.stringify(payload),
            avatar: previewAvatar || existingAvatar,
        };

        try {
            await updateUser(`/api/users/${userId}`, updateData);
            navigate("/ManageUser");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleAvatarUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPreviewAvatar(e.target.files[0]); // Store the avatar file directly, no conversion to base64
        }
    };

    const handleRemoveUser = async () => {
        if (window.confirm("Are you sure you want to remove this user?")) {
            try {
                await deleteData(`/api/users/${userId}`);
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
                <div className="edit-user-form">
                    <div className="edit-user-left">
                        <div className="edit-user-input-group">
                            <label htmlFor="userName">User Name</label>
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={handleUserNameChange}
                                className="edit-user-input"
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
                            />
                        </div>

                        <div className="edit-user-input-group">
                            <label htmlFor="userRole">Role</label>
                            <input
                                type="text"
                                id="userRole"
                                value={userRole}
                                onChange={handleUserRoleChange}
                                className="edit-user-input"
                            />
                        </div>
                    </div>

                    <div className="edit-user-right">
                        <div className="edit-user-avatar-upload">
                            {existingAvatar && !previewAvatar ? (
                                <img
                                    src={existingAvatar} // Directly use the existing avatar URL or path
                                    alt="Existing user avatar"
                                    className="edit-user-avatar-preview"
                                />
                            ) : previewAvatar ? (
                                <img
                                    src={URL.createObjectURL(previewAvatar)} // Create an object URL for the preview avatar file
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
                                onClick={handleUpdateUser}
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
                </div>
            </div>
        </div>
    );
}