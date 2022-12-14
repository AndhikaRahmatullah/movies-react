import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMain } from "../context/main";

const Navigation = () => {
	const { selectFilm } = useMain();
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<div className={splitLocation[1] !== "about" && splitLocation[1] !== "detail" && splitLocation[1] !== "" ? "hidden" : "hidden w-full h-[70px] fixed top-0 px-20 md:flex flex-row justify-between items-center bg-1 shadow-xl z-50 "}>
			<div className="h-[50px]">
				<Link
					to="/"
					className="h-full pr-2 flex flex-row justify-center items-center gap-4 text-lg lg:text-2xl font-bold tracking-wider text-4">
					<img
						src="https://img.icons8.com/plasticine/512/film-reel.png"
						alt="logo xxwan mopis"
						className="w-[50px] bg-4 rounded-lg"
					/>
					XXWAN MOPIS
				</Link>
			</div>
			{splitLocation[1] === "detail" ? (
				<nav className="flex text-4 text-lg transition-all duration-500">
					<p className="">{selectFilm}</p>
				</nav>
			) : (
				<nav className="flex flex-row gap-3 list-none text-gray-700 text-lg transition-all duration-500">
					<li className={splitLocation[1] === "" ? " text-4 transition-all duration-500" : ""}>
						<Link to="/">Beranda</Link>
					</li>{" "}
					<li className={splitLocation[1] === "about" ? " text-4 transition-all duration-500" : ""}>
						<Link to="/about">Tentang</Link>
					</li>{" "}
				</nav>
			)}
		</div>
	);
};

export default Navigation;
