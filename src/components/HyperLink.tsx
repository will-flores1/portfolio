import React from "react";

interface Props {
	link: string;
	img: string;
}

function HyperLink(props: Props) {
	return (
		<a
			href={props.link}
			target="_blank"
			rel="noreferrer"
			className="mt-3 flex items-center hover:bg-teal-100 py-2 px-4 rounded-md transition duration-300 ease-in-out w-fit text-lg lg:text-base group"
		>
			<img
				src={props.img}
				alt=""
				className="h-7 w-7 lg:h-6 lg:w-6 fill-current pr-2"
			/>
			<div className="font-bold text-moonTeal group-hover:underline">
				<span className="font-light">@</span>will-flores1
			</div>
		</a>
	);
}

export default HyperLink;
