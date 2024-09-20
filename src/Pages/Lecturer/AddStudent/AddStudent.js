import React, { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from './AddStudent.module.css'; // Updated to use CSS modules

const AddStudent = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        selectedClass: "",
        image: null
    });

    const classes = ["JuneIntake2024", "JulyIntake2024", "AugustIntake2024"]; // Example classes

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle image upload
    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = new FormData();
        studentData.append("firstName", formData.firstName);
        studentData.append("lastName", formData.lastName);
        studentData.append("email", formData.email);
        studentData.append("selectedClass", formData.selectedClass);
        studentData.append("image", formData.image);

        // Here you can handle form submission, like sending data to an API
        console.log("Submitted Data:", formData);

        // Clear form after submission
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            selectedClass: "",
            image: null,
        });
    };

    return (
        <div className={styles['add-student']}>
            <Navbar />
            <div className={styles['addstudent-content']}>
                <Sidebar />
                <div className={styles['content-area']}>
                    <h2>Add New Student</h2>
                    <form onSubmit={handleSubmit} className={styles['add-student-form']}>
                        <div className={styles['form-group']}>
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Email Address:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Select Class:</label>
                            <select
                                name="selectedClass"
                                value={formData.selectedClass}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Class</option>
                                {classes.map((cls, index) => (
                                    <option key={index} value={cls}>
                                        {cls}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles['form-group']}>
                            <label>Upload Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                        <button type="submit" className={styles['submit-btn']}>Add Student</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;
