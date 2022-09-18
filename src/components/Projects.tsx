import React from "react";

function Projects(props: any) {
	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-center dark:text-white mt-3">
			{props.children}
		</div>
	);
}

export default Projects;
