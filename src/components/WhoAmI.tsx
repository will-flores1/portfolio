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
			id="fade">
			<main>
				<section>
					<div className="dark:text-white font-semibold text-5xl lg:text-6xl border-black border-b-4 w-fit pb-1 tracking-wider dark:border-white mt-16">
						Me in 10 seconds
					</div>
					<div className="mt-2 font-normal dark:text-white lg:text-base text-lg font-mono tracking-tighter">
						<p className="py-2">
							I'm a <span className="w-40">{age}</span> year old
							developer
						</p>
						<p className="py-2">
							<strong>Languages:</strong> Javascript, HTML + CSS
						</p>
						<p className="py-2">
							<strong>Frameworks:</strong> React, Svelte
						</p>
						<strong>Databases:</strong> Oracle SQL, AWS RDS, MongoDB
					</div>
				</section>
				<div
					id="projects"
					className="mt-6 font-semibold text-5xl lg:text-6xl border-black border-b-4 w-fit pb-1 tracking-wider dark:text-white dark:border-white pt-16">
					Projects
				</div>
				<Projects />
			</main>
			<footer className="mb-10">
				<div className="mt-6 font-semibold text-4xl lg:text-5xl border-black border-b-4 w-fit pb-1 tracking-wide dark:text-white dark:border-white pt-16">
					On the web
				</div>
				<HyperLink
					img=""
					link="https://www.linkedin.com/in/wflore19/"
					title="LinkedIn"
				/>
			</footer>
		</div>
	);
}

export default WhoAmI;
