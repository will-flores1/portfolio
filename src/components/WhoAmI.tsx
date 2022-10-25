import ProjectTemplate from "./ProjectTemplate";
import Projects from "./Projects";
import { getAge } from "../helpers/age";
import { useEffect, useState } from "react";

function WhoAmI() {
	let [age, setAge] = useState("");

	useEffect(() => {
		const timer = setInterval(() => {
			setAge(getAge());
		}, 50);
		return () => clearInterval(timer);
	}, [age]);

	return (
		<div
			className="flex flex-col mx-auto max-w-3xl lg:max-w-3xl px-10 lg:px-20"
			id="fade"
		>
			{/* <div className="bg-white/30 dark:bg-white/50 px-10 py-3 rounded-md mt-5 text-lg md:text-base text-center text-black/70 tracking-wide dark:text-white">
				<div className="font-mono tracking-tighter">
					I'm a <span className="w-40">{age}</span> year old developer based in
					Maryland, USA
				</div>
			</div> */}
			<div className="lg:flex lg:justify-between mt-1">
				<div>
					<div className="mt-5 dark:text-white font-bold tracking-wider lg:text-3xl text-4xl text-black/70">
						Wilfredo Flores
					</div>
					<div className="text-black/70 dark:text-white text-lg lg:text-base">
						Software Developer
					</div>
				</div>
				<img
					src="./assets/profile-picture.png"
					className="lg:mx-0 h-40 w-40 mx-auto my-4"
					alt="profile"
				/>
			</div>
			<div className="dark:text-white font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:border-white">
				Me in 10 seconds
			</div>
			<div className="mt-2 font-normal dark:text-white lg:text-base text-lg font-mono tracking-tighter">
				<p className="py-2">
					I'm a <span className="w-40">{age}</span> year old developer based in
					Maryland.
				</p>
				<p className="py-2">
					Javascript is my language of choice for both quick scripts and web
					development.
				</p>
				<p className="py-2">
					I use React, Meta's framework, for creating web apps.
				</p>
				<p className="py-2">
					I speak English (native) and Spanish (proficient).
				</p>
			</div>
			{/* <a
				href="https://www.wilfredoflores.dev/"
				className="bg-emerald-600 w-fit mx-auto mt-6 py-3 px-6 rounded-md text-white hover:cursor-pointer hover:bg-emerald-700 transition ease-in-out duration-150 font-bold"
				target="_blank"
				rel="noreferrer"
			>
				My portfolio
			</a> */}
			<div className="mt-6 font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:text-white dark:border-white">
				Projects
			</div>
			<Projects>
				{/* OBS Plug-in */}
				<ProjectTemplate
					title="Countdown Timer for OBS"
					description="Countdown Stream Timer/Clock for OBS"
					demoLink=""
					githubLink="https://github.com/will-flores1/Countdown-obs-plugin"
					demoImg="./assets/timer-obs-plugin-demo.jpg"
				/>
				{/* Sort Algorithms Visualizer */}
				<ProjectTemplate
					title="Sort Algorithms Visualizer"
					description="Sorting algorithm visualization tool."
					demoLink="https://sort-algorithms-six.vercel.app/"
					githubLink="https://github.com/will-flores1/Sort-Algorithms"
					demoImg="./assets/sort-algorithms-demo.jpg"
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
			</Projects>
			<div className="mt-6 font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wide dark:text-white dark:border-white ">
				On the web
			</div>
			<a
				href="https://github.com/will-flores1"
				target="_blank"
				rel="noreferrer"
				className="mt-3 flex items-center hover:bg-teal-100 py-2 px-4 rounded-md transition duration-300 ease-in-out w-fit text-lg lg:text-base group"
			>
				<img
					src="./assets/github.svg"
					alt=""
					className="h-7 w-7 lg:h-6 lg:w-6 fill-current pr-2"
				/>
				<div className="font-bold text-moonTeal group-hover:underline">
					<span className="font-light">@</span>will-flores1
				</div>
			</a>
			<a
				href="https://twitter.com/will_flores1"
				target="_blank"
				rel="noreferrer"
				className="flex items-center hover:bg-teal-100 py-2 px-4 rounded-md transition duration-300 ease-in-out w-fit text-lg lg:text-base group"
			>
				<img
					src="./assets/twitter.svg"
					alt=""
					className="h-7 w-7 lg:h-6 lg:w-6 fill-current pr-2"
				/>
				<div className="font-bold text-moonTeal group-hover:underline">
					<span className="font-light">@</span>will_flores1
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/wilfredo-flores1/"
				target="_blank"
				rel="noreferrer"
				className="flex items-center hover:bg-teal-100 py-2 px-4 rounded-md transition duration-300 ease-in-out w-fit mb-16 text-lg lg:text-base group"
			>
				<img
					src="./assets/linkedin.svg"
					alt=""
					className="h-7 w-7 lg:h-6 lg:w-6 fill-current pr-2"
				/>
				<div className="font-bold text-moonTeal group-hover:underline">
					<span className="font-light">@</span>wilfredo-flores1
				</div>
			</a>
		</div>
	);
}

export default WhoAmI;
