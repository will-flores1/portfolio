import ProjectTemplate from "./ProjectTemplate";

interface Props {
	children: JSX.Element | JSX.Element[];
}

function Projects() {
	return (
		<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 text-center dark:text-white mt-3 mx-auto">
			{/* Five O Autocare Mechanic Services Website */}
			<ProjectTemplate
				title="Rockville Mechanic"
				description="Custom website services. Built w/ Astro, Svelte, & SASS."
				demoLink="https://www.fiveoautocare.com/"
				githubLink="https://github.com/will-flores1/mechanic-rockville"
				demoImg="./assets/mechanic.jpg"
			/>
			{/* Pro Auto Body Services Website */}
			<ProjectTemplate
				title="Rockville Auto Body"
				description="Custom website services. Built with Astro & Svelte."
				demoLink="https://www.autobodyservicerockville.com"
				githubLink="https://github.com/will-flores1/AutoBody-Rockville"
				demoImg="./assets/autobody.jpg"
			/>
			{/* OBS Plug-in */}
			<ProjectTemplate
				title="Countdown Timer"
				description="Countdown Stream Timer/Clock for Open Broadcast Software (OBS)"
				demoLink=""
				githubLink="https://github.com/will-flores1/Countdown-obs-plugin"
				demoImg="./assets/timer-obs-plugin-demo.jpg"
			/>
			{/* Local Library */}
			<ProjectTemplate
				title="Library App"
				description="Book tracking web application."
				demoLink="https://library-app-navy.vercel.app/"
				githubLink="https://github.com/will-flores1/Library-App"
				demoImg="./assets/library-app-demo.jpg"
			/>
			{/* Spotify API React */}
			<ProjectTemplate
				title="Spotify Web App"
				description="Interface to play w/ categories, playlists, tracks using the Spotify API"
				demoLink="https://spotify-api-react.vercel.app/"
				githubLink="https://github.com/will-flores1/spotify-api-react"
				demoImg="./assets/spotify-demo.webp"
			/>
			{/* Twitter */}
			<ProjectTemplate
				title="Twitter Clone"
				description="Interface clone using Tailwindcss. Features include sign in, tweet, and comment."
				demoLink="https://twitter-2-0-nu.vercel.app/"
				githubLink="https://github.com/will-flores1/twitter-2.0"
				demoImg="./assets/twitter-demo.webp"
			/>
		</div>
	);
}

export default Projects;
