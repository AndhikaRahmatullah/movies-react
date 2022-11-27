import { useState, useEffect } from "react";
import { useMain } from "../context/main";

const Favorite = () => {
	const main = useMain();
	const { MainSearch } = main;

	useEffect(() => {
		document.title = "Suka | XXWan Mopis";

		return () => {
			document.title = "XXWan Mopis";
		};
	}, []);

	return <div className="mt-[100px]">{main.title}</div>;
};

export default Favorite;
