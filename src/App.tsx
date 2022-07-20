import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import WhoAmI from "./components/WhoAmI";

function App() {
	return (
		<div className="min-h-screen bg-background dark:bg-darkBackground transition duration-700 ease-in-out">
			<Header />
			<WhoAmI />
		</div>
	);
}

export default App;
