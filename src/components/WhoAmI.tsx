import ProjectTemplate from "./ProjectTemplate";
import Projects from "./Projects";

function WhoAmI() {
	const TheOdinProject = (
		<a
			href="https://www.theodinproject.com"
			target="_blank"
			rel="noreferrer"
			className="font-semibold hover:underline"
		>
			The Odin Project's
		</a>
	);

	return (
		<div
			className="flex flex-col mx-auto max-w-3xl lg:max-w-3xl px-10 lg:px-20"
			id="fade"
		>
			<div className="bg-white/30 dark:bg-white/50 px-10 py-3 rounded-md mt-5 text-sm text-center text-black/70 tracking-wide dark:text-white">
				Hi, I am a software engineer and video editor based in Maryland
			</div>
			<div className="lg:flex lg:justify-between">
				<div>
					<div className="mt-5 dark:text-white font-bold tracking-wider lg:text-3xl text-4xl text-black/70">
						Wilfredo Flores
					</div>
					<div className="text-black/70 dark:text-white text-lg lg:text-base">
						Software Engineer
					</div>
				</div>
				<img
					src="./assets/profile-picture.png"
					className="lg:pt-3 lg:mx-0 md:h-40 md:w-40 h-32 w-32 mx-auto my-4"
					alt=""
				/>
			</div>
			<div className="dark:text-white font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:border-white">
				Me in 10 seconds
			</div>
			<div className="mt-2 font-extralight dark:text-white lg:text-base text-lg">
				I started programming in Java while I was studying Computer Science at
				Montgomery College.
			</div>
			<div className="mt-2 font-extralight dark:text-white lg:text-base text-lg">
				I worked through {TheOdinProject} full stack boot camp while working
				full-time at an auto body shop.
			</div>
			<div className="mt-2 font-extralight dark:text-white lg:text-base text-lg">
				I speak English (native) and Spanish (proficient)
			</div>
			<div className="mt-2 font-extralight dark:text-white lg:text-base text-lg">
				<strong>Things that fire me up:</strong> soccer, video editing, video
				games
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
				{/* Twitter */}
				<ProjectTemplate
					title="Twitter Feed Clone"
					description="Sign in, tweet, and comment."
					demoLink="https://twitter-2-0-nu.vercel.app/"
					githubLink="https://github.com/will-flores1/twitter-2.0"
					demoImg="./assets/twitter-demo.webp"
				/>
				{/* Spotify API React */}
				<ProjectTemplate
					title="Spotify API React"
					description="Spotify API categories, playlists, tracks UI"
					demoLink="https://spotify-api-react.vercel.app/"
					githubLink="https://github.com/will-flores1/spotify-api-react"
					demoImg="./assets/spotify-demo.webp"
				/>
				{/* Speed typing game */}
				<ProjectTemplate
					title="Speed Typing Game"
					description="Speed typing test. How fast do you type?"
					demoLink="https://speed-typing-game-omega.vercel.app/"
					githubLink="https://github.com/will-flores1/speed-typing-game"
					demoImg="./assets/typing-demo.webp"
				/>
				{/* Local Library */}
				<ProjectTemplate
					title="Book Library"
					description="Library app. Add, remove, and update books."
					demoLink="https://will-flores1.github.io/library-local/"
					githubLink="https://github.com/will-flores1/library-local"
					demoImg="./assets/local-library.webp"
				/>
			</Projects>
			<div className="mt-6 font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wide dark:text-white dark:border-white ">
				On the web
			</div>
			<a
				href="https://github.com/will-flores1"
				target="_blank"
				rel="noreferrer"
				className="mt-3 flex items-center hover:bg-blue-200 py-2 px-4 rounded-sm transition duration-500 ease-in-out w-fit text-lg lg:text-base"
			>
				<img
					src="./assets/github.svg"
					alt=""
					className="h-7 w-7 fill-current pr-2"
				/>
				<div className="font-bold text-moonTeal hover:underline">
					<span className="font-light">@</span>will-flores1
				</div>
			</a>
			<a
				href="https://twitter.com/will_flores1"
				target="_blank"
				rel="noreferrer"
				className="flex items-center hover:bg-blue-200 py-2 px-4 rounded-sm transition duration-500 ease-in-out w-fit text-lg lg:text-base"
			>
				<img
					src="./assets/twitter.svg"
					alt=""
					className="h-7 w-7 fill-current pr-2"
				/>
				<div className="font-bold text-moonTeal hover:underline">
					<span className="font-light">@</span>will_flores1
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/wilfredo-flores1/"
				target="_blank"
				rel="noreferrer"
				className="flex items-center hover:bg-blue-200 py-2 px-4 rounded-sm transition duration-500 ease-in-out w-fit mb-16 text-lg lg:text-base"
			>
				<img
					src="./assets/linkedin.svg"
					alt=""
					className="h-7 w-7 fill-current pr-2"
				/>
				<div className="font-bold text-moonTeal hover:underline">
					<span className="font-light">@</span>wilfredo-flores1
				</div>
			</a>
		</div>
	);
}

export default WhoAmI;
