import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import TestSettings from "../../../Components/TestSettings/TestSettings";
import Button from "../../../Components/Button/Button";
import "./TestPage.css";

const TestPage = () => {

  const links = [
		{path: "/LecturerDashboard", pathName: "Home"},
		{path: "/AddStudent", pathName: "Add Student"}
	]

	return (
		<div className="test-page">
			<div className="content">
				<Sidebar links={links}/>
				<div className="main-content">
					<h1>Test Page</h1>
					<div>
						<Button label="Create test" />
					</div>
					<div>
						<TestSettings />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestPage;
