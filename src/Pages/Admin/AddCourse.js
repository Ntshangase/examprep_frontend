import React, { useState } from "react";
import "./AddCourse.css";
//import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { createCourse } from "../../Api/Api";

export default function AddCourse() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const [courseData, setCourseData] = useState({
		// course id is automatic
		courseName: "",
		courseDescription: "",
		courseImage: null,
		domains: [{ domainName: "", topics: [{ topicName: "" }] }],
	});

	//const navigate = useNavigate();

	// Update course name and description
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCourseData({ ...courseData, [name]: value });
	};

	// Handle course image change
	const handleCourseImageChange = (e) => {
		setCourseData({ ...courseData, courseImage: e.target.files[0] });
	};

	// Handle domain name change
	const handleDomainChange = (index, value) => {
		const newDomains = [...courseData.domains];
		newDomains[index].domainName = value;
		setCourseData({ ...courseData, domains: newDomains });
	};

	// Handle topic name change
	const handleTopicChange = (domainIndex, topicIndex, value) => {
		const newDomains = [...courseData.domains];
		newDomains[domainIndex].topics[topicIndex].topicName = value;
		setCourseData({ ...courseData, domains: newDomains });
	};

	// Add a new domain
	const handleAddDomain = () => {
		setCourseData({
			...courseData,
			domains: [
				...courseData.domains,
				{ domainName: "", topics: [{ topicName: "" }] },
			],
		});
	};

	// Add a new topic to a domain
	const handleAddTopic = (domainIndex) => {
		const newDomains = [...courseData.domains];
		newDomains[domainIndex].topics.push({ topicName: "" });
		setCourseData({ ...courseData, domains: newDomains });
	};

	const payload = {
		//for first part of the multi-part form upload.
		courseName: courseData.courseName,
		courseDescription: courseData.courseDescription,
		domains: courseData.domains
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		const sendData = {
			courseDetails: JSON.stringify(payload),
			image: courseData.courseImage,
		}

		// Append course image if it's present
		// if (courseData.courseImage) {
		// 	sendData.append("courseImage", courseData.courseImage);
		// }

		try {
			// Make the API call using the formData object
			console.log(typeof sendData);
			console.log(typeof sendData.courseDetails);
			console.log(typeof sendData.image);
			await createCourse(sendData);
			console.log("Course added successfully");

			// After successful creation, you can navigate to another page
			// navigate("/ManageCourse"); // Uncomment if you want to navigate
		} catch (error) {
			console.error("Error adding course:", error.message);
		}
	};

	return (
		<div className="add-course-container">
			<Sidebar links={links} />

			<main className="add-course-main">
				<h1 className="add-course-title">Add Course</h1>
				<form className="add-course-form" onSubmit={handleSubmit}>
					<div className="add-course-form-group">
						<label>Course Name</label>
						<input
							type="text"
							name="courseName"
							value={courseData.courseName}
							onChange={handleChange}
							placeholder="Enter course name"
							required
						/>
					</div>

					<div className="add-course-form-group">
						<label>Course Description</label>
						<textarea
							name="courseDescription"
							value={courseData.courseDescription}
							onChange={handleChange}
							placeholder="Enter course description"
							required
						/>
					</div>

					<div className="add-course-form-group">
						<label>Upload Course Image</label>
						<input
							type="file"
							onChange={handleCourseImageChange}
							accept="image/*"
						/>
						{courseData.courseImage && (
							<img
								src={URL.createObjectURL(courseData.courseImage)}
								alt="Course Preview"
								className="add-course-selected-image-preview"
							/>
						)}
					</div>

					<div className="add-course-domains-section">
						{courseData.domains.map((domain, domainIndex) => (
							<div key={domainIndex} className="add-course-domain-group">
								<div className="add-course-form-group">
									<label>Domain Name</label>
									<input
										type="text"
										value={domain.domainName}
										onChange={(e) =>
											handleDomainChange(domainIndex, e.target.value)
										}
										placeholder="Enter domain name"
										required
									/>
								</div>

								<div className="add-course-topics-section">
									<label>Topics</label>
									{domain.topics.map((topic, topicIndex) => (
										<div
											key={topicIndex}
											className="add-course-form-group add-course-topic-input"
										>
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
												placeholder="Enter topic"
											/>
										</div>
									))}
									<button
										type="button"
										className="add-course-add-topic-button"
										onClick={() => handleAddTopic(domainIndex)}
									>
										+ Add Topic
									</button>
								</div>
							</div>
						))}

						<button
							type="button"
							className="add-course-add-domain-button"
							onClick={handleAddDomain}
						>
							+ Add Domain
						</button>
					</div>

					<button type="submit" className="add-course-submit-button">
						Add Course
					</button>
				</form>
			</main>
		</div>
	);
}
