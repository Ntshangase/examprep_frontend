import React, { useEffect, useState } from "react";
import "./EditCourse.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { getData, updateCourse, deleteData } from "../../Api/Api";

export default function EditCourse() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const { courseId } = useParams();
	const navigate = useNavigate();
	const [courseData, setCourseData] = useState(null);
	const [courseName, setCourseName] = useState("");
	const [courseDescription, setCourseDescription] = useState("");
	const [domains, setDomains] = useState([
		{
			domainName: "",
			topics: [],
		},
	]);
	const [existingImage, setExistingImage] = useState(null);
	const [previewImage, setPreviewImage] = useState(null);

	// Fetch course data when the component mounts
	useEffect(() => {
		const fetchCourseData = async () => {
			try {
				const response = await getData(`/api/courses/${courseId}`);
				setCourseData(response.data);
				setCourseName(response.data.courseName);
				setCourseDescription(response.data.courseDescription);
				setDomains(response.data.domains || []);
				setExistingImage(response.data.image || null); // Set initial existing image if available
			} catch (error) {
				console.error("Error fetching course data:", error);
			}
		};

		fetchCourseData();
	}, [courseId]);

	// Handlers for course name and description
	const handleCourseNameChange = (e) => setCourseName(e.target.value);
	const handleCourseDescriptionChange = (e) =>
		setCourseDescription(e.target.value);

	// Handle updates for domains and topics
	const handleDomainChange = (index, value) => {
		const updatedDomains = [...domains];
		updatedDomains[index].domainName = value;
		setDomains(updatedDomains);
	};

	const handleTopicChange = (domainIndex, topicIndex, value) => {
		const updatedDomains = [...domains];
		updatedDomains[domainIndex].topics[topicIndex].topicName = value;
		setDomains(updatedDomains);
	};

	// Update course data
	const handleUpdateCourse = async () => {
		const payload = {
			courseName,
			courseDescription,
			domains,
		};

		const updateData = {
			courseDetails: JSON.stringify(payload),
			image: previewImage || existingImage,
		};

		try {
			await updateCourse(`/api/courses/${courseId}`, updateData);
			navigate("/ManageCourse");
		} catch (error) {
			console.error("Error updating course:", error);
		}
	};

	const handleImageUpload = (e) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewImage(reader.result); // Set the preview of the new image as base64 string
			};
			reader.readAsDataURL(file); // Read the file as data URL (base64)
		}
	};

	const handleRemoveCourse = async () => {
		if (window.confirm("Are you sure you want to remove this course?")) {
			try {
				await deleteData(`/api/courses/${courseId}`);
				navigate("/ManageCourse");
			} catch (error) {
				console.error("Error removing course:", error);
			}
		}
	};

	if (!courseData) {
		return <div>Loading...</div>;
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
								{domains.map((domain, domainIndex) => (
									<div key={domainIndex} className="edit-course-domain-item">
										<div className="edit-course-make-row">
											<input
												type="text"
												value={domain.domainName}
												onChange={(e) =>
													handleDomainChange(domainIndex, e.target.value)
												}
												className="edit-course-domain-input"
											/>
										</div>

										<div className="edit-course-topic-list">
											{domain.topics.map((topic, topicIndex) => (
												<div key={topicIndex} className="edit-course-make-row">
													<input
														type="text"
														value={topic.topicName}
														onChange={(e) =>
															handleTopicChange(
																domainIndex,
																topicIndex,
																e.target.value
															)
														}
														className="edit-course-topic-input"
													/>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="edit-course-right">
						<div className="edit-course-image-upload">
							{previewImage ? (
								<img
									src={previewImage}
									alt="New Course Preview"
									className="edit-course-image-preview"
								/>
							) : existingImage ? (
								<img
									src={`data:image/jpeg;base64,${existingImage}`}
									alt="Existing Course"
									className="edit-course-image-preview"
								/>
							) : (
								<p>No image uploaded</p>
							)}
							<input
								type="file"
								accept="image/*"
								onChange={handleImageUpload}
								className="edit-course-image-input"
							/>
						</div>
						<div className="edit-course-actions">
							<button
								onClick={handleUpdateCourse}
								className="edit-course-upload-button"
							>
								Update Course
							</button>
							<button
								onClick={handleRemoveCourse}
								className="edit-course-delete-button"
							>
								Delete Course
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
