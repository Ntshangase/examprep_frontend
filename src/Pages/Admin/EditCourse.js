import React, { useEffect, useState } from "react";
import "./EditCourse.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { getData, updateData, deleteData } from "../../Api/Api"; // Ensure you have these functions defined

export default function EditCourse() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const { courseId } = useParams(); // Get courseId from URL
	const navigate = useNavigate(); // For navigation after updating or deleting
	const [courseData, setCourseData] = useState(null);
	const [courseName, setCourseName] = useState("");
	const [courseDescription, setCourseDescription] = useState("");
	const [domains, setDomains] = useState([]);
	const [topics, setTopics] = useState([]); // State for topics
	const [newDomain, setNewDomain] = useState("");
	const [newTopic, setNewTopic] = useState(""); // State for new topic
	const [image, setImage] = useState(null); // State for image

	// Fetch course data when the component mounts
	useEffect(() => {
		const fetchCourseData = async () => {
			try {
				const response = await getData(`/api/courses/${courseId}`);
				setCourseData(response.data); // Save it in state
				setCourseName(response.data.courseName);
				setCourseDescription(response.data.courseDescription);
				setDomains(response.data.domains || []); // Ensure domains are initialized
				setTopics(response.data.topics || []); // Ensure topics are initialized
				setImage(response.data.image || null); // Set initial image if available
			} catch (error) {
				console.error("Error fetching course data:", error);
			}
		};

		fetchCourseData();
	}, [courseId]); // Run this effect when courseId changes

	// Handle course name change
	const handleCourseNameChange = (e) => setCourseName(e.target.value);

	// Handle course description change
	const handleCourseDescriptionChange = (e) =>
		setCourseDescription(e.target.value);

	// Handle updating the course using a payload
	const handleUpdateCourse = async () => {
		const payload = {
			courseName,
			courseDescription,
			domains,
			topics,
			image, // Include image in the payload if needed
		};

		try {
			await updateData(`/api/courses/${courseId}`, payload); // Send the payload to update the course
			navigate("/ManageCourse"); // Redirect after successful update
		} catch (error) {
			console.error("Error updating course:", error);
		}
	};

	// Handle adding a new domain
	const handleAddDomain = () => {
		if (newDomain.trim()) {
			setDomains([...domains, newDomain.trim()]);
			setNewDomain(""); // Clear input field
		}
	};

	// Handle removing a domain
	const handleRemoveDomain = (indexToRemove) => {
		const updatedDomains = domains.filter(
			(_, index) => index !== indexToRemove
		);
		setDomains(updatedDomains);
	};

	// Handle adding a new topic
	const handleAddTopic = () => {
		if (newTopic.trim()) {
			setTopics([...topics, newTopic.trim()]);
			setNewTopic(""); // Clear input field
		}
	};

	// Handle removing a topic
	const handleRemoveTopic = (indexToRemove) => {
		const updatedTopics = topics.filter((_, index) => index !== indexToRemove);
		setTopics(updatedTopics);
	};

	// Handle image upload (dummy function for now)
	const handleImageUpload = (e) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setImage(URL.createObjectURL(file)); // Preview the image locally
			// You can also implement logic to upload the image to your server here.
		}
	};

	// Handle course removal
	const handleRemoveCourse = async () => {
		if (window.confirm("Are you sure you want to remove this course?")) {
			try {
				await deleteData(`/api/courses/${courseId}`); // Call the API to delete the course
				navigate("/ManageCourse"); // Redirect after deletion
			} catch (error) {
				console.error("Error removing course:", error);
			}
		}
	};

	if (!courseData) {
		return <div>Loading...</div>; // Show loading while fetching data
	}

	return (
		<div className="edit-course-container">
			<Sidebar links={links} />
			<div className="edit-course-wrapper">
				<h1 className="edit-course-header">Edit Course</h1>
				<div className="edit-course-form">
					<div className="edit-course-left">
						<div className="edit-course-input-group">
							<label htmlFor="courseName">Course Name</label>
							<input
								type="text"
								id="courseName"
								value={courseName}
								onChange={handleCourseNameChange}
								className="edit-course-input"
							/>
						</div>

						<div className="edit-course-input-group">
							<label htmlFor="courseDescription">Course Description</label>
							<textarea
								id="courseDescription"
								value={courseDescription}
								onChange={handleCourseDescriptionChange}
								rows="5"
								className="edit-course-textarea"
							/>
						</div>

						<div className="edit-course-input-group">
							<label>Domains</label>
							<div className="edit-course-domain-list">
								{domains.map((domain, index) => (
									<div key={index} className="edit-course-domain-item">
										<input
											type="text"
											value={domain}
											onChange={(e) => {
												const updatedDomains = [...domains];
												updatedDomains[index] = e.target.value; // Update domain in place
												setDomains(updatedDomains);
											}}
											className="edit-course-domain-input"
										/>
										<button
											onClick={() => handleRemoveDomain(index)}
											className="edit-course-remove-domain"
										>
											&times;
										</button>
									</div>
								))}
							</div>

							<div className="edit-course-add-domain">
								<input
									type="text"
									placeholder="Add new domain"
									value={newDomain}
									onChange={(e) => setNewDomain(e.target.value)}
									className="edit-course-input"
								/>
								<button
									onClick={handleAddDomain}
									className="edit-course-add-button"
								>
									Add Domain
								</button>
							</div>
						</div>

						{/* Topics Section */}
						<div className="edit-course-input-group">
							<label>Topics</label>
							<div className="edit-course-topic-list">
								{topics.map((topic, index) => (
									<div key={index} className="edit-course-topic-item">
										<input
											type="text"
											value={topic}
											onChange={(e) => {
												const updatedTopics = [...topics];
												updatedTopics[index] = e.target.value; // Update topic in place
												setTopics(updatedTopics);
											}}
											className="edit-course-topic-input"
										/>
										<button
											onClick={() => handleRemoveTopic(index)}
											className="edit-course-remove-topic"
										>
											&times;
										</button>
									</div>
								))}
							</div>

							<div className="edit-course-add-topic">
								<input
									type="text"
									placeholder="Add new topic"
									value={newTopic}
									onChange={(e) => setNewTopic(e.target.value)}
									className="edit-course-input"
								/>
								<button
									onClick={handleAddTopic}
									className="edit-course-add-button"
								>
									Add Topic
								</button>
							</div>
						</div>
					</div>
					<div className="edit-course-right">
							{/* Image Upload Section */}
							<div className="edit-course-image-upload">
								{image && (
									<img
										src={image}
										alt="Course"
										className="edit-course-image-preview"
									/>
								)}
								<input
									type="file"
									accept="image/*"
									onChange={handleImageUpload}
								/>
							</div>

							<div className="edit-course-actions">
								<button
									onClick={handleUpdateCourse}
									className="edit-course-button update"
								>
									Update Course
								</button>
								<button
									onClick={handleRemoveCourse}
									className="edit-course-button remove"
								>
									Remove Course
								</button>
							</div>
						</div>
				</div>
			</div>
		</div>
	);
}
