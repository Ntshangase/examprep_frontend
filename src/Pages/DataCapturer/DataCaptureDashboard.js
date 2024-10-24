import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../src/Components/Sidebar/Sidebar";
import "./DataCaptureDashboard.css";
import { getCourse } from "../../API/Api.js";

const DataCaptureDashboard = () => {
	const links = [{ path: "/DataCaptureDashboard", pathName: "Home" }];

	const navigate = useNavigate();
	const handleAddQustion = (x) => {
		navigate(`/AddQuestions/${x}`);
	};
	const [loadingState, setLoadingState] = useState(true);
	const [courseData, setCourseData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try{
				const response = await getCourse();
				setCourseData(response.data);
			}catch(error){
				console.log(error.message);
			}finally{
				setLoadingState(false);
			}
		};
		fetchData();
	},[]);
	
	if(loadingState){
		return <div>...Loading</div>
	}

	return (
		<div className="data-capture-dashboard-container">
			<Sidebar links={links} />
			<div className="data-capture-content-area">
				<h2>Select Course to Add Question</h2>
				{/* Certification Badges with Labels */}
				<div className="badge-section">
					{courseData.map((course,index) => (
						<div
							className="badge-card"
							key={index}
						>
							<div className="badge">
								<img
									src={`data:image/jpeg;base64,${course.image}`}
									alt={course.courseName}
									className="badge-image"
								/>
								<p className="data-capture-about-course">{course.courseName}</p>
								<button onClick={() => {handleAddQustion(course.courseId)}}>Add Question</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DataCaptureDashboard;
