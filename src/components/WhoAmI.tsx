import React from "react";
import pp from "../assets/profile-picture.png";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import ProjectTemplate from "./ProjectTemplate";

function WhoAmI() {
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
						Digital Craftsmen ( Editor / Developer )
					</div>
				</div>
				<img
					src={pp}
					className="lg:pt-3 lg:mx-0 lg:h-40 h-32 mx-auto my-4"
					alt=""
				/>
			</div>
			<div className="dark:text-white font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:border-white">
				Me in 10 seconds
			</div>
			<div className="mt-2 font-extralight dark:text-white lg:text-base text-lg">
				I learned to program and edit videos through the internet{" "}
				{/* <a
					href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
					target="_blank"
					rel="noreferrer"
					className="font-black hover:underline"
				>
					CS50
				</a>
				,
				<a
					href="https://www.theodinproject.com/"
					target="_blank"
					rel="noreferrer"
					className="font-black hover:underline"
				>
					The Odin Project
				</a>
				, &{" "}
				<a
					href="https://scrimba.com/"
					target="_blank"
					rel="noreferrer"
					className="font-black hover:underline"
				>
					Scrimba
				</a> */}
			</div>
			<div className="mt-2 font-extralight dark:text-white lg:text-base text-lg">
				I speak English (native) and Spanish (proficient)
			</div>
			<div className="mt-2 font-extralight dark:text-white lg:text-base text-lg">
				<strong>Things that fire me up:</strong> soccer, video editing, gaming,
				photography
			</div>
			{/* <a
				href="https://www.wilfredoflores.dev/"
				className="bg-emerald-600 w-fit mx-auto mt-6 py-3 px-6 rounded-md text-white hover:cursor-pointer hover:bg-emerald-700 transition ease-in-out duration-150 font-bold"
				target="_blank"
				rel="noreferrer"
			>
				My portfolio
			</a> */}
			{/* <iframe
				className="mx-auto w-fit h-full mt-5"
				src="https://www.youtube.com/embed/SH5FY6MB-ZQ"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></iframe> */}
			<div className="mt-6 font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:text-white dark:border-white">
				Projects
			</div>
			{/* Twitter */}
			<ProjectTemplate
				title="Twitter Feed Clone"
				description="Sign in, tweet, and comment."
				demoLink="https://twitter-2-0-nu.vercel.app/"
				githubLink="https://github.com/will-flores1/twitter-2.0"
			/>
			{/* Spotify API React */}
			<ProjectTemplate
				title="Spotify API React"
				description="Spotify API categories, playlists, tracks UI"
				demoLink="https://spotify-api-react.vercel.app/"
				githubLink="https://github.com/will-flores1/spotify-api-react"
			/>
			{/* Speed typing game */}
			<ProjectTemplate
				title="Speed Typing Game"
				description="Speed typing test. How fast do you type?"
				demoLink="https://speed-typing-game-omega.vercel.app/"
				githubLink="https://github.com/will-flores1/speed-typing-game"
			/>
			{/* Local Library */}
			<ProjectTemplate
				title="Book Library"
				description="Library app. Add, remove, and update books."
				demoLink="https://will-flores1.github.io/library-local/"
				githubLink="https://github.com/will-flores1/library-local"
			/>

			<div>
				<div className="mt-6 font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wide dark:text-white dark:border-white tracking-normal">
					On the web
				</div>
			</div>
			<a
				href="https://github.com/will-flores1"
				target="_blank"
				rel="noreferrer"
				className="mt-3 flex items-center hover:bg-blue-200 py-2 px-4 rounded-sm transition duration-500 ease-in-out w-fit text-lg lg:text-base"
			>
				<img src={github} alt="" className="h-7 w-7 fill-current pr-2" />
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
				<img src={twitter} alt="" className="h-7 w-7 fill-current pr-2" />
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
				<img src={linkedin} alt="" className="h-7 w-7 fill-current pr-2" />
				<div className="font-bold text-moonTeal hover:underline">
					<span className="font-light">@</span>wilfredo-flores1
				</div>
			</a>
		</div>
	);
}

export default WhoAmI;
