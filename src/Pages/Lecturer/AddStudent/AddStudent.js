import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from './AddStudent.module.css';
import axios from "axios";

const AddStudent = () => {
    const links = [
        { path: "/LecturerDashboard", pathName: "Home" },
        { path: "/AddStudent", pathName: "Add Student" }
    ];

    const [AddStudent, setAddStudent] = useState({
        email: "",
        password: "",
        title: "",  // Keeps the selected title
        fullNames: "",
        surname: "",
        contactNumber: "",
        role: "string",
        profileImage: null,
        isApproved: false,
        classId: ""  // Initially empty to be dynamically set
    });

    const [classes, setClasses] = useState([]);

    // Fetch classes from API
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/classes/all");
                setClasses(response.data);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };
        fetchClasses();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddStudent({
            ...AddStudent,
            [name]: value,
        });
    };

    // Handle image upload
    const handleImageChange = (e) => {
        setAddStudent({
            ...AddStudent,
            profileImage: e.target.files[0],
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            email: AddStudent.email,
            password: "pass123",
            title: AddStudent.title,  // Pass the selected title
            fullNames: AddStudent.fullNames,
            surname: AddStudent.surname,
            contactNumber: AddStudent.contactNumber,
            profileImage: "",
            isApproved: false,
            classId: Number(AddStudent.classId)
        };

        try {
            console.log("not uploading", payload)
            await axios.post("http://localhost:8080/api/temp-students/register", payload);
            console.log("Student added successfully");
        } catch (error) {
            console.log("Error adding student:", error);
        }

        setAddStudent({
            email: "",
            password: "",
            title: "",
            fullNames: "",
            surname: "",
            contactNumber: "",
            role: "",
            profileImage: "",
            classId: ""
        });
    };

    return (
        <div className={styles['add-student']}>
            <div className={styles['addstudent-content']}>
                <Sidebar links={links} />
                <div className={styles['content-area']}>
                    <h2>Add New Student</h2>
                    <form onSubmit={handleSubmit} className={styles['add-student-form']}>
                    
                    <div className={styles['form-group']}>
                        <label>Title</label>
                        <select
                            name="title"
                            value={AddStudent.title}  // Dynamically set the selected title
                            onChange={handleChange}  // Handle title change
                            required
                        >
                            <option value="">Select title</option>  {/* Default option */}
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                    </div>

                        <div className={styles['form-group']}>
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="fullNames"
                                value={AddStudent.fullNames}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="surname"
                                value={AddStudent.surname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Email Address:</label>
                            <input
                                type="email"
                                name="email"
                                value={AddStudent.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Contact Number:</label>
                            <input
                                type="text"
                                name="contactNumber"
                                value={AddStudent.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Select Class:</label>
                            <select
                                name="classId"
                                value={AddStudent.classId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Class</option>
                                {classes.map((cls) => (
                                    <option key={cls.classId} value={cls.classId}>
                                        {cls.className}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* <div className={styles['form-group']}>
                            <label>Upload Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                            />
                        </div> */}
                        <button type="submit" className={styles['submit-btn']}>Add Student</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;
