interface Props {
	githubLink?: string;
	demoImg: string;
	title: string;
	description: string;
	demoLink?: string;
	tags?: string[];
	currentTag?: string;
}

function ProjectTemplate(props: Props) {
	return (
		<div className=" dark:text-white/90 text-black/90 group mx-auto">
			<a href={props.githubLink} target="_blank" rel="noreferrer">
				<img
					src={
						props.demoImg !== "" ? props.demoImg : "./assets/placeholder.png"
					}
					alt="thumbnail"
					className="rounded-xl mb-4 w-80 h-44 mx-auto object-cover"
				/>
				<div className="flex justify-center items-center">
					<p className="text-xl md:text-lg font-medium group-hover:opacity-70 transition duration-500 ease-in-out">
						{props.title}
					</p>
					<img
						src="./assets/github.svg"
						alt=""
						className="h-6 w-6 lg:h-5 lg:w-5 fill-darkMoon pt-1 ml-2 group group-hover:opacity-25 transition duration-500 ease-in-out"
					/>
				</div>
				<p className="font-normal pt-1 md:text-sm text-black dark:text-white/90 group-hover:opacity-70 transition duration-500 ease-in-out flex justify-center">
					{props.description}
				</p>
				<div className="mt-2 mb-2 flex flex-wrap justify-center gap-2">
					{props.tags?.map((tag) => (
						<span
							key={tag}
							className={
								props.currentTag === tag
									? "bg-gray-300 dark:bg-gray-500 dark:text-white/90 text-black/90 px-2 py-1 rounded-md text-sm font-medium"
									: "bg-gray-200 dark:bg-gray-700 dark:text-white/90 text-black/90 px-2 py-1 rounded-md text-sm font-medium"
							}
						>
							{tag}
						</span>
					))}
				</div>
			</a>
			<div className="flex justify-center gap-4">
				{props.demoLink ? (
					<a
						href={props.demoLink}
						target="_blank"
						rel="noreferrer"
						className="p-1 text-blue-500 hover:underline md:font-normal lg:text-base text-lg font-semibold"
					>
						Live Demo
					</a>
				) : null}

				{props.githubLink ? (
					<a
						href={props.githubLink}
						target="_blank"
						rel="noreferrer"
						className="p-1 text-blue-500 hover:underline md:font-normal lg:text-base text-lg font-semibold"
					>
						Source Code
					</a>
				) : null}
			</div>
		</div>
	);
}

export default ProjectTemplate;
