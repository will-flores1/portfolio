import React from "react";
import paw from "../assets/footprint.webp";
import darkPaw from "../assets/footprint-dark.webp";
import { MenuIcon, MoonIcon } from "@heroicons/react/solid";

interface Props {
	theme: string;
	toggleTheme: any;
}
function Header(props: Props) {
	return (
		<div className="shadow-sm bg-white/30 sticky top-0 backdrop-blur-md">
			<div className="flex justify-between py-2 max-w-2xl lg:max-w-3xl mx-auto">
				<div className="flex px-2 items-center">
					<img
						className="h-5 hover:cursor-pointer hover:rotate-12 transition ease-in-out duration-300"
						src={props.theme === "dark" ? darkPaw : paw}
						alt=""
					/>
					<div className="text-lg font-semibold hover:cursor-pointer dark:text-white">
						Wilfredo Flores
					</div>
				</div>
				<div className="flex space-x-4 items-center px-2">
					<MoonIcon
						onClick={props.toggleTheme}
						className="h-8 hover:cursor-pointer rotate-35 bg-lightMoon dark:bg-darkMoon p-2 rounded-md active:scale-105 transition ease-in-out fill-white dark:fill-inherit"
					/>
					{/* <MenuIcon className="h-5 hover:cursor-pointer rotate-35 rounded-md" /> */}
				</div>
			</div>
		</div>
	);
}

export default Header;
