import ProjectTemplate from "./ProjectTemplate";

interface Props {
	children: JSX.Element | JSX.Element[];
}

function Projects() {
	return (
		<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 text-center dark:text-white mt-3 mx-auto">
			{/* Sort Algorithms Visualizer */}
			<ProjectTemplate
				title="Auto Body Service Website"
				description="Auto Body service website, built with Astro.js."
				demoLink="https://www.autobodyservicerockville.com"
				githubLink="https://www.autobodyservicerockville.com"
				demoImg="./assets/autobodyservice.png"
			/>
			{/* OBS Plug-in */}
			<ProjectTemplate
				title="Countdown Timer for OBS"
				description="Countdown Stream Timer/Clock for OBS"
				demoLink=""
				githubLink="https://github.com/will-flores1/Countdown-obs-plugin"
				demoImg="./assets/timer-obs-plugin-demo.jpg"
			/>
			{/* Local Library */}
			<ProjectTemplate
				title="CRUD Library App"
				description="Book tracking web application."
				demoLink="https://library-app-navy.vercel.app/"
				githubLink="https://github.com/will-flores1/Library-App"
				demoImg="./assets/library-app-demo.jpg"
			/>
			{/* Spotify API React */}
			<ProjectTemplate
				title="Spotify Web API App"
				description="Spotify API categories, playlists, tracks UI"
				demoLink="https://spotify-api-react.vercel.app/"
				githubLink="https://github.com/will-flores1/spotify-api-react"
				demoImg="./assets/spotify-demo.webp"
			/>
			{/* Twitter */}
			<ProjectTemplate
				title="Twitter Clone"
				description="Sign in, tweet, and comment."
				demoLink="https://twitter-2-0-nu.vercel.app/"
				githubLink="https://github.com/will-flores1/twitter-2.0"
				demoImg="./assets/twitter-demo.webp"
			/>
		</div>
	);
}

export default Projects;
