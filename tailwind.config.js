/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#f1e7dc",
				darkBackground: "#202023",
				lightMoon: "#805ad5",
				darkMoon: "#fcd28d",
			},
		},
	},
	plugins: [],
};
