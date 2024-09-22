import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Pages/Admin/AdminLanding"
import ModerateAws from "./Pages/Moderator/ModerateAws";
import ModeratorDashboard from "./Pages/Moderator/ModeratorDashboard";
import QuestionView from "./Pages/Moderator/QuestionView";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";
import TestPage from "./Pages/Lecturer/TestPage/TestPage";
import AssignedClasses from "./Pages/Lecturer/Classes/AssignedClasses";
import ViewClass from "./Pages/Lecturer/ViewClass/ViewClass";
import ViewStudents from "./Pages/Lecturer/ViewStudents/ViewStudents";
import StudPerfom from "./Pages/Lecturer/ViewStudents/StudPerfom";
import StudentsSubmitted from "./Pages/Lecturer/StudentsSubmitted/StudentsSubmitted";
import SubmittedTests from "./Pages/Lecturer/SubmittedTests/SubmittedTests";
import IndStudentDash from "./Pages/Student/Independent/IndStudentDash";
import IndStudentCourseDetail from "./Pages/Student/Independent/IndStudentCourseDetails";
import AddCourse from "./Pages/Admin/AddCourse";
import CourseDetails from "./Pages/Admin/CourseDetails";
import CreateClass from "./Pages/Admin/CreateClass";
import EditClass from "./Pages/Admin/EditClass";
import EditCourse from "./Pages/Admin/EditCourse";
import ManageClass from "./Pages/Admin/ManageClass";
import ManageStudents from "./Pages/Admin/ManageStudents"
import PanelEnrolled from "./Pages/Student/Enrolled/PanelEnrolled";
import Classes from "./Pages/Student/Enrolled/Classes";
import ScheduledTests from "./Pages/Student/Enrolled/ScheduledTests";
import ManageCourse from "./Pages/Admin/ManageCourse";
import StudentDashboards from "./Pages/Student/StudentDashboards";
import IndStudentCreateTest from "./Pages/Student/Independent/IndStudentCreateTest";
import IndStudentWriteTest from "./Pages/Student/Independent/IndStudentWriteTest";
import TestGeneratePage from "./Pages/Lecturer/TestGeneratePage/TestGeneratePage";
import AddStudent from "./Pages/Lecturer/AddStudent/AddStudent";
import Analytics from "./Pages/Lecturer/Analytics/Analytics";
import TestGeneratePage from "./Pages/Lecturer/TestGeneratePage/TestGeneratePage";
import './Styles/global.css';
import ApproveStudent from "./Pages/Admin/ApproveStudent";

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
				<Route path="/StudentDashboards" element={<StudentDashboards />} />
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
				<Route path="/ManageStudents" element={<ManageStudents />} />
				<Route path="/ManageCourse" element={<ManageCourse />} />
				<Route path="/StudentsSubmitted" element={<StudentsSubmitted />} />
				<Route path="/StudPerfom" element={<StudPerfom />} />
				<Route path="/ViewClass" element={<ViewClass />} />
				<Route path="/ViewStudents" element={<ViewStudents />} />
				<Route path="/AssignedClasses" element={<AssignedClasses />} />
				<Route path="/IndStudentCreateTest" element={<IndStudentCreateTest />} />
				<Route path="/IndStudentWriteTest" element={<IndStudentWriteTest />} />
				<Route path="/TestGeneratePage" element={<TestGeneratePage />} />
				<Route path="/AddStudent" element={<AddStudent />} />
				<Route path="/Analytics" element={<Analytics />} />
				<Route path="/TestGeneratePage" element={<TestGeneratePage />} />
				<Route path="/ApproveStudent" element={<ApproveStudent />} />
			</Routes>
		</Router>
	);
}
export default App;
