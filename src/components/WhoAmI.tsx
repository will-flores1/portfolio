import ProjectTemplate from "./ProjectTemplate";
import Projects from "./Projects";
import { getAge } from "../helpers/age";
import { useEffect, useState } from "react";
import HyperLink from "./HyperLink";

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
			<main>
				<section>
					<div className="lg:flex lg:justify-between mt-1">
						<div>
							<div className="mt-5 dark:text-white font-bold tracking-wider lg:text-3xl text-4xl text-black/70">
								Wilfredo Flores
							</div>
							{/* <div className="text-black/70 dark:text-white text-lg lg:text-base">
								Software Developer
							</div> */}
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
							I'm a <span className="w-40">{age}</span> year old developer based
							in Maryland.
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
				</section>
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
				<Projects />
			</main>
			<footer className="mb-10">
				<div className="mt-6 font-semibold text-2xl lg:text-xl border-black border-b-4 w-fit pb-1 tracking-wide dark:text-white dark:border-white ">
					On the web
				</div>
				<HyperLink
					img="./assets/github.svg"
					link="https://github.com/will-flores1"
				/>
				<HyperLink
					img="./assets/twitter.svg"
					link="https://twitter.com/will_flores1"
				/>
			</footer>
		</div>
	);
}

export default WhoAmI;
