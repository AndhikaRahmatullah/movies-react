import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<div className="w-full h-[70px] fixed top-0 px-20 flex flex-row justify-between items-center bg-1 shadow-xl z-50 ">
			<p className="text-2xl font-bold tracking-wider text-4">
				XXWAN<span className="px-1 bg-4 text-1">MOPIS</span>
			</p>
			<nav className="flex flex-row gap-3 text-lg list-none text-gray-700">
				<li className={splitLocation[1] === "" ? "text-4 transition-all duration-500" : ""}>
					<Link to="/">Beranda</Link>
				</li>{" "}
				<li className={splitLocation[1] === "favorite" ? "text-4 transition-all duration-500" : ""}>
					<Link to="/favorite">Suka</Link>
				</li>{" "}
			</nav>
		</div>
	);
};

export default Navigation;
