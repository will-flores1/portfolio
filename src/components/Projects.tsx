import ProjectTemplate from "./ProjectTemplate";
import { useState } from "react";
import projects from "../data/projects.json";

interface Props {
	children: JSX.Element | JSX.Element[];
}
function Projects() {
	const [currentTag, setCurrentTag] = useState<string>("All");

	const [tags, setTags] = useState<string[]>([
		"All",
		"The Odin Project",
		"Website",
		"OBS Plug-in",
	]);

	return (
		<div>
			<div className="flex gap-2 whitespace-nowrap scroll-smooth overflow-y-scroll no-scrollbar mt-10 font-semibold dark:text-white text-black/90">
				Tags:
				{tags.map((tag) => (
					<button
						className={
							currentTag === tag
								? "bg-gray-300 dark:bg-gray-500 dark:text-white text-black/90 px-3 py-1 rounded-md text-sm font-semibold"
								: "bg-gray-200 dark:bg-gray-700 dark:text-white text-black/90 px-3 py-1 rounded-md text-sm font-semibold hover:first-letter:underline hover:bg-gray-300 dark:hover:bg-gray-500"
						}
						key={tag}
						onClick={() => {
							setCurrentTag(tag);
						}}>
						{tag}
					</button>
				))}
			</div>

			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 text-center dark:text-white mt-10 mx-auto">
				{projects.map((project) => {
					if (currentTag === "All" || project.tags.includes(currentTag)) {
						return (
							<ProjectTemplate
								key={project.title}
								githubLink={project.githubLink}
								demoImg={project.demoImg}
								title={project.title}
								description={project.description}
								demoLink={project.demoLink}
								tags={project.tags}
								currentTag={currentTag}
							/>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
}

export default Projects;
