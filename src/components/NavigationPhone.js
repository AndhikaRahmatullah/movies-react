import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationPhone = () => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	const [showNavStatus, setShowNavStatus] = useState(false);

	const changeShowNav = () => {
		const nav = document.getElementById("containerNav");
		const homePage = document.getElementById("containerHome");
		const aboutPage = document.getElementById("containerAbout");
		setShowNavStatus((curr) => !curr);

		if (!showNavStatus) {
			if (splitLocation[1] === "") {
				homePage.classList.add("blur-md");
			} else if (splitLocation[1] === "about") {
				aboutPage.classList.add("blur-md");
			}
			nav.classList.remove("h-[70px]");
			nav.classList.add("h-[120px]");
		} else {
			if (splitLocation[1] === "") {
				homePage.classList.remove("blur-md");
			} else if (splitLocation[1] === "about") {
				aboutPage.classList.remove("blur-md");
			}
			nav.classList.remove("h-[120px]");
			nav.classList.add("h-[70px]");
		}
	};

	return (
		<div
			id="containerNav"
			className={splitLocation[1] !== "about" && splitLocation[1] !== "" ? "hidden" : "md:hidden w-full h-[70px] px-4 fixed top-0 flex flex-col justify-center items-center gap-4 bg-1 shadow-2xl z-50 transition-all duration-700"}>
			<div className="h-[50px] flex flex-row justify-center items-center gap-2 text-lg font-bold tracking-wider text-4">
				<img
					src="https://img.icons8.com/plasticine/512/film-reel.png"
					alt="logo xxwan mopis"
					onClick={changeShowNav}
					className="w-[30px] bg-4 rounded-lg"
				/>
				<p
					onClick={changeShowNav}
					className="">
					XXWAN MOPIS
				</p>
			</div>
			{showNavStatus ? (
				<nav className="flex flex-row gap-3 text-base list-none text-gray-700">
					<li className={splitLocation[1] === "" ? "text-4 transition-all duration-500" : ""}>
						<Link
							to="/"
							onClick={changeShowNav}>
							Beranda
						</Link>
					</li>{" "}
					<li className={splitLocation[1] === "about" ? "text-4 transition-all duration-500" : ""}>
						<Link
							to="/about"
							onClick={changeShowNav}>
							Tentang
						</Link>
					</li>{" "}
				</nav>
			) : null}
		</div>
	);
};

export default NavigationPhone;
