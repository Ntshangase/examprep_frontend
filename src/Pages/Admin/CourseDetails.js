import React from "react";
import "./CourseDetails.css";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import courses from "../../Data/Courses.json";

export default function CourseDetails() {
	return (
		<div className="course-details-container">
			<AdminSidebar />
			<div className="course-detail-content">
				<h2>Course Details</h2>
				<div className="course-info">
					<img src={courses[0].image} alt={courses[0].title} />
					<h3>{courses[0].title}</h3>
				</div>
				<h4>Active Classes</h4>
				<div className="classese">
					<div>
						<div className="class-display">
							<div className="class-details">
								<p>Class: </p>
								<p>hi</p>
							</div>
              <div>
              <p>Emoji</p>
              <p>Emoji2</p>
            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
