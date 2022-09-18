import React from "react";

function ProjectTemplate(props: any) {
	return (
		<div className=" dark:text-white/90 text-black/90">
			<a href={props.githubLink} target="_blank" rel="noreferrer">
				<img
					src={props.demoImg}
					alt="thumbnail"
					className="rounded-xl mb-4 w-fit h-44 md:h-fit"
				/>
				<p className="text-xl md:text-lg">{props.title}</p>
				<p className="font-light pt-1 text-base md:text-sm">
					{props.description}
				</p>
			</a>
			{/* <a
				href={props.demoLink}
				target="_blank"
				rel="noreferrer"
				className="pl-3 text-blue-500 hover:underline md:font-normal lg:text-base text-lg font-semibold"
			>
				Live
			</a>
			<a
				href={props.githubLink}
				target="_blank"
				rel="noreferrer"
				className="p-3 text-blue-500 hover:underline md:font-normal lg:text-base text-lg font-semibold"
			>
				Source-code
			</a> */}
		</div>
	);
}

export default ProjectTemplate;
