import React from "react";
import "./App.css";
import Header from "./components/Header";
import WhoAmI from "./components/WhoAmI";

function App() {
	const [theme, setTheme] = React.useState(
		localStorage.getItem("data-theme") || "light"
	);
	document.documentElement.setAttribute("class", theme);

	const toggleTheme = (): void => {
		if (theme === "dark") {
			localStorage.setItem("data-theme", "light");
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
			setTheme("light");
		} else {
			localStorage.setItem("data-theme", "dark");
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
			setTheme("dark");
		}
	};

	return (
		<div className="min-h-screen bg-background dark:bg-darkBackground transition duration-700 ease-in-out">
			<Header theme={theme} toggleTheme={toggleTheme} />
			<WhoAmI />
		</div>
	);
}

export default App;
