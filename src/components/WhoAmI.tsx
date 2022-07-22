import React from "react";
import pp from "../assets/profile-picture.png";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

function WhoAmI() {
	return (
		<div className="flex flex-col mx-auto max-w-3xl lg:max-w-3xl px-16 lg:px-20">
			<div className="bg-white/30 dark:bg-white/50 px-10 py-3 rounded-md mt-10 text-sm text-center text-black/70 tracking-wide dark:text-white">
				Hi, I'm a web developer based in Maryland
			</div>
			<div className="lg:flex lg:justify-between">
				<div>
					<div className="mt-5 dark:text-white font-bold tracking-wider text-3xl text-black/70">
						Wilfredo Flores
					</div>
					<div className="text-black/70 dark:text-white">
						Digital Craftsmen ( Developer / Designer )
					</div>
				</div>
				<img
					src={pp}
					className="lg:pt-3 lg:mx-0 lg:h-40 h-32 mx-auto my-4"
					alt=""
				/>
			</div>
			<div className="dark:text-white font-semibold text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:border-white">
				Me in 10 seconds
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				I am web developer / designer based in Maryland
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				I've taken{" "}
				<a
					href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
					target="_blank"
					rel="noreferrer"
					className="font-black hover:underline"
				>
					CS50
				</a>
				<a
					href="https://www.theodinproject.com/"
					target="_blank"
					rel="noreferrer"
					className="font-black hover:underline"
				>
					, The Odin Project
				</a>
				<a
					href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
					target="_blank"
					rel="noreferrer"
					className="font-black hover:underline"
				>
					, Web Design
				</a>
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				I build websites using Typescript, React/Nextjs, CSS, and Sanity
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				I speak english and spanish
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				<strong>Things that fire me up:</strong> health, productivity,
				computers, photography, and movies
			</div>
			<a
				href="https://www.wilfredoflores.dev/"
				className="bg-emerald-600 w-fit mx-auto mt-6 py-3 px-6 rounded-md text-white hover:cursor-pointer hover:bg-emerald-700 transition ease-in-out duration-150 font-bold"
				target="_blank"
				rel="noreferrer"
			>
				My portfolio
			</a>
			<div className="mt-6 font-semibold text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:text-white dark:border-white">
				Projects
			</div>
			<div className="py-3 overflow-normal dark:text-white/90">
				<a
					className="font-bold pr-3 text-blue-500 hover:text-black dark:hover:text-white transition duration-150 ease-in-out"
					target="_blank"
					rel="noreferrer"
					href="https://twitter-2-0-nu.vercel.app/"
				>
					Twitter Clone
				</a>{" "}
				Tweet, Sign In, Comment functionality. Built w/ Next.js, React,
				Typescript, Sanity, GROQ, Tailwindcss{" "}
				<a
					href="https://twitter-2-0-nu.vercel.app/"
					target="_blank"
					rel="noreferrer"
					className="pl-3 font-bold text-blue-500 hover:underline"
				>
					Live
				</a>
				<a
					href="https://github.com/will-flores1/twitter-2.0"
					target="_blank"
					rel="noreferrer"
					className="pl-3 font-bold text-blue-500 hover:underline"
				>
					Source
				</a>
			</div>
			<div className="py-2 overflow-normal dark:text-white/90 mb-2">
				<a
					className="font-bold pr-3 text-blue-500 hover:text-black dark:hover:text-white transition duration-150 ease-in-out"
					target="_blank"
					rel="noreferrer"
					href="https://twitter-2-0-nu.vercel.app/"
				>
					Medium Clone
				</a>{" "}
				Post & Comment functionality. Front-end practice. Built w/ Next.js,
				React, Typescript, Sanity, GROQ, Tailwindcss{" "}
				<a
					href="https://twitter-2-0-nu.vercel.app/"
					target="_blank"
					rel="noreferrer"
					className="pl-3 text-blue-500 hover:underline font-black"
				>
					Live
				</a>
				<a
					href="https://github.com/will-flores1/twitter-2.0"
					target="_blank"
					rel="noreferrer"
					className="p-3 text-blue-500 hover:underline font-black"
				>
					Source
				</a>
			</div>
			<div>
				<div className="mt-6 font-semibold text-xl border-black border-b-4 w-fit pb-1 tracking-wide dark:text-white dark:border-white tracking-normal">
					On the web
				</div>
				<a
					href="https://github.com/will-flores1"
					target="_blank"
					rel="noreferrer"
					className="mt-3 flex items-center hover:bg-blue-200 py-2 px-4 rounded-sm transition duration-500 ease-in-out w-fit"
				>
					<img src={github} alt="" className="h-6 w-6 fill-current pr-2" />
					<a
						href="https://github.com/will-flores1"
						target="_blank"
						rel="noreferrer"
						className="font-bold text-moonTeal hover:underline"
					>
						<span className="font-light">@</span>will-flores1
					</a>
				</a>
			</div>
			<a
				href="https://twitter.com/will_flores1"
				target="_blank"
				rel="noreferrer"
				className="flex items-center hover:bg-blue-200 py-2 px-4 rounded-sm transition duration-500 ease-in-out w-fit"
			>
				<img src={twitter} alt="" className="h-6 w-6 fill-current pr-2" />
				<a
					href="https://twitter.com/will_flores1"
					target="_blank"
					rel="noreferrer"
					className="font-bold text-moonTeal hover:underline"
				>
					<span className="font-light">@</span>will_flores1
				</a>
			</a>
			<a
				href="https://www.linkedin.com/in/wilfredo-flores1/"
				target="_blank"
				rel="noreferrer"
				className="flex items-center hover:bg-blue-200 py-2 px-4 rounded-sm transition duration-500 ease-in-out w-fit mb-10"
			>
				<img src={linkedin} alt="" className="h-6 w-6 fill-current pr-2" />
				<a
					href="https://www.linkedin.com/in/wilfredo-flores1/"
					target="_blank"
					rel="noreferrer"
					className="font-bold text-moonTeal hover:underline"
				>
					<span className="font-light">@</span>wilfredo-flores1
				</a>
			</a>
		</div>
	);
}

export default WhoAmI;
