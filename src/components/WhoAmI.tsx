import ProjectTemplate from "./ProjectTemplate";
import Projects from "./Projects";
import { getAge } from "../helpers/age";
import { useEffect, useState } from "react";
import HyperLink from "./HyperLink";
import projects from "../data/projects.json";

function WhoAmI() {
	let [age, setAge] = useState("");
	let [getRandomProject, setGetRandomProject] = useState(false);

	let [i, setI] = useState(0);

	function randomInt(max: number) {
		return Math.floor(Math.random() * max);
	}

	const handleClick = () => {
		setGetRandomProject(true);
		setI(randomInt(projects.length));
	};

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
							<div className="mt-5 dark:text-white font-bold tracking-wider lg:text-3xl text-4xl text-black/90">
								Wilfredo Flores
							</div>
							<div className="text-black/70 dark:text-white text-lg lg:text-base">
								Programmer
							</div>
						</div>
						<img
							src="./profile-pic.webp"
							className="lg:mx-0 h-40 w-40 mx-auto my-4 rounded-full"
							alt="profile"
						/>
					</div>
					<div className="dark:text-white font-semibold text-5xl lg:text-6xl border-black border-b-4 w-fit pb-1 tracking-wider dark:border-white mt-16">
						Me in 10 seconds
					</div>
					<div className="mt-2 font-normal dark:text-white lg:text-base text-lg font-mono tracking-tighter">
						<p className="py-2">
							I'm a <span className="w-40">{age}</span> year old developer from
							Maryland.
						</p>
						<p className="py-2">
							<strong>Languages:</strong> Javascript/Typescript, HTML + CSS,
							Python
						</p>
						<p className="py-2">
							<strong>Frontend:</strong> React, Svelte, Wordpress
						</p>
						<p className="py-2">
							<strong>Styling:</strong> Tailwindcss, SASS, Bootstrap
						</p>
						<p className="py-2">
							<strong>Backend:</strong> Node, Express, Mongoose, MongoDB, MySQL
						</p>
					</div>
				</section>
				<button
					className="bg-emerald-600 w-fit flex mx-auto mt-16 mb-10 py-3 px-6 rounded-md text-white hover:cursor-pointer hover:bg-emerald-700 transition ease-in-out duration-150 font-bold"
					onClick={handleClick}
				>
					Random Project
				</button>
				{getRandomProject && (
					<ProjectTemplate
						key={projects[i].title}
						githubLink={projects[i].githubLink}
						demoImg={projects[i].demoImg}
						title={projects[i].title}
						description={projects[i].description}
						demoLink={projects[i].demoLink}
						tags={projects[i].tags}
					/>
				)}
				<div className="mt-6 font-semibold text-5xl lg:text-6xl border-black border-b-4 w-fit pb-1 tracking-wider dark:text-white dark:border-white pt-16">
					Projects
				</div>
				<Projects />
			</main>
			<footer className="mb-10">
				<div className="mt-6 font-semibold text-4xl lg:text-5xl border-black border-b-4 w-fit pb-1 tracking-wide dark:text-white dark:border-white pt-16">
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
