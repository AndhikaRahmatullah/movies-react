import { useState, useEffect } from "react";
import { useMain } from "../context/main";

const About = () => {
	const main = useMain();
	const { MainSearch } = main;

	useEffect(() => {
		document.title = "Suka | XXWan Mopis";

		return () => {
			document.title = "XXWan Mopis";
		};
	}, []);

	return (
		<div className="mt-[100px]">
			<div
				id="containerAbout"
				className="transition-all duration-700">
				{main.title}
			</div>
		</div>
	);
};

export default About;
