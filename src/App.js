import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./pages/Admin/AdminLanding"
import Testing from "./pages/Admin/Testing";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminLanding" element={<Admin />} />
				<Route path="/Testing" element={<Testing />} />
			</Routes>
		</Router>
	);
}

export default App;
