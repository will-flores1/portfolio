import React from "react";

function ProjectTemplate(props: any) {
	return (
		<div className="py-2 overflow-normal dark:text-white/90 mb-2">
			<a
				className="font-bold pr-3 text-blue-500 hover:text-black dark:hover:text-white transition duration-150 ease-in-out"
				target="_blank"
				rel="noreferrer"
				href={props.demoLink}
			>
				{props.title}
			</a>{" "}
			{props.description}{" "}
			<a
				href={props.demoLink}
				target="_blank"
				rel="noreferrer"
				className="pl-3 text-blue-500 hover:underline font-bold"
			>
				Live
			</a>
			<a
				href={props.githubLink}
				target="_blank"
				rel="noreferrer"
				className="p-3 text-blue-500 hover:underline font-bold"
			>
				Source-code
			</a>
		</div>
	);
}

export default ProjectTemplate;
