import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ModeratorDashboard from "./Pages/Moderator/ModeratorDashboard";
import ModerateAws from "./Pages/Moderator/ModerateAws";
import QuestionView from "./Pages/Moderator/QuestionView";
import Admin from "./Pages/Admin/AdminLanding";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";
import TestPage from "./Pages/Lecturer/TestPage/TestPage";
import "./Styles/global.css";
import StudentDashboard from "./Pages/Student/StudentDashboards";
import SubmittedTests from "./Pages/Lecturer/SubmittedTests/SubmittedTests";
import IndStudentDash from "./Pages/Student/Independent/IndStudentDash";
import IndStudentCourseDetail from "./Pages/Student/Independent/IndStudentCourseDetails";
import AddCourse from "./Pages/Admin/AddCourse";
import CourseDetails from "./Pages/Admin/CourseDetails";
import CreateClass from "./Pages/Admin/CreateClass";
import EditClass from "./Pages/Admin/EditClass";
import EditCourse from "./Pages/Admin/EditClass";
import ManageClass from "./Pages/Admin/ManageClass";
import ManageStudents from "./Pages/Admin/ManageStudents"
import PanelEnrolled from "./Pages/Student/Enrolled/PanelEnrolled";
import Classes from "./Pages/Student/Enrolled/Classes";
import ScheduledTests from "./Pages/Student/Enrolled/ScheduledTests";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AdminLanding" element={<Admin />} />
				<Route path="/ModerateAws" element={<ModerateAws />} />
				<Route path="/ModeratorDashboard" element={<ModeratorDashboard />} />
				<Route path="/QuestionView" element={<QuestionView />} />
				<Route path="/LecturerDashboard" element={<LecturerDashboard />} />
				<Route path="/StudentDashboard" element={<StudentDashboard />} />
				<Route path="/TestPage" element={<TestPage />} />
				<Route path="/SubmittedTests" element={<SubmittedTests />} />
				<Route path="/IndStudentDash" element={<IndStudentDash />} />
				<Route path="/IndStudentCourseDetails" element={<IndStudentCourseDetail />} />
				<Route path="/AddCourse" element={<AddCourse />} />
				<Route path="/CourseDetails" element={<CourseDetails />} />
				<Route path="/CreateClass" element={<CreateClass />} />
				<Route path="/EditClass" element={<EditClass />} />
				<Route path="/ManageClass" element={<ManageClass />} />
				<Route path="/EditCourse" element={<EditCourse />} />
				<Route path="/ManageStudents" element={<ManageStudents />} />
				<Route path="/PanelEnrolled" element={<PanelEnrolled />} />
				<Route path="/Classes" element={<Classes />} />
				<Route path="/ScheduledTests" element={<ScheduledTests />} />
			</Routes>
		</Router>
	);
}
export default App;
