import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ModeratorDashboard from "./Pages/Moderator/ModeratorDashboard";
import ModerateAws from "./Pages/Moderator/ModerateAws";
import QuestionView from "./Pages/Moderator/QuestionView";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AdminLanding" element={<Admin />} />
				<Route path="/ModerateAws" element={<ModerateAws />} />
        <Route path="/ModeratorDashboard" element={<ModeratorDashboard />} />
		<Route path="/QuestionView" element={<QuestionView />} />

			</Routes>
		</Router>
	);
}
export default App;
