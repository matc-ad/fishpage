import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { colorsOptions } from "./constants";
import Home from "./pages/Home";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = Cookies.get("darkMode");
		return savedMode === "true" || savedMode === undefined; // Default to dark mode if no cookie is set
	});

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			Cookies.set("darkMode", newMode, { expires: 365, domain: "matc.ad" });
			return newMode;
		});
	};

	useEffect(() => {
		const mode = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;
		document.body.className = `${mode.background} ${mode.text}`;
	}, [isDarkMode]);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
