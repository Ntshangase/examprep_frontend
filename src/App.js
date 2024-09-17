import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Pages/Admin/AdminLanding"
import Testing from "./Pages/Admin/Testing";
import AddUser from "./Pages/Admin/AddUser";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminLanding" element={<Admin />} />
				<Route path="/Testing" element={<Testing />} />
				<Route path="/AddUser" element={<AddUser />} />
			</Routes>
		</Router>
	);
}

export default App;
