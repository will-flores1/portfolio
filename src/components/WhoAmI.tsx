import React from "react";
import pp from "../assets/profile-picture.png";

function WhoAmI() {
	return (
		<div className="flex flex-col mx-auto max-w-3xl lg:max-w-3xl px-16 lg:px-20">
			<div className="bg-white/30 dark:bg-white/50 px-10 py-3 rounded-md mt-10 text-sm text-center text-black/70 tracking-wide dark:text-white">
				Hi, I'm a web app developer based in Maryland
			</div>
			<div className="lg:flex lg:justify-between">
				<div>
					<div className="mt-5 dark:text-white font-bold tracking-wider text-3xl text-black/70">
						Wilfredo Flores
					</div>
					<div className="text-black/70 dark:text-white">
						Digital Craftsmen ( Developer / Designer )
					</div>
				</div>
				<img
					src={pp}
					className="lg:pt-3 lg:mx-0 lg:h-40 h-32 mx-auto my-4"
					alt=""
				/>
			</div>
			<div className="dark:text-white font-semibold text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:border-white">
				Me in 10 seconds
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				I live in Maryland and work as a freelance web developer
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				I played soccer and studied computer science in college
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				I speak english and spanish
			</div>
			<div className="mt-2 font-extralight dark:text-white">
				<strong>Things that fire me up:</strong> stocks, movies, sports,
				photography, productivity, health
			</div>
			<input
				type="button"
				className="bg-emerald-500/90 w-fit mx-auto mt-6 py-2 px-4 rounded-md text-white hover:cursor-pointer hover:bg-emerald-700 transition ease-in-out duration-150"
				value="My portfolio"
			></input>
			<div className="mt-6 font-semibold text-xl border-black border-b-4 w-fit pb-1 tracking-wider dark:text-white dark:border-white">
				Bio
			</div>
		</div>
	);
}

export default WhoAmI;
