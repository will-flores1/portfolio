interface Props {
	children: JSX.Element | JSX.Element[];
}

function Projects(props: Props) {
	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-center dark:text-white mt-3 mx-auto">
			{props.children}
		</div>
	);
}

export default Projects;
