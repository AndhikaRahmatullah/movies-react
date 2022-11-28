import { useState, useEffect } from "react";
import { useMain } from "../context/main";
import { capitalLetter } from "../utils/capitalLetter";

const Display = () => {
	const main = useMain();
	const { title, movieDataCurrent } = main;
	const [data, setData] = useState(null);
	const [typeData, setTypeData] = useState(null);

	useEffect(() => {
		// console.log("movieDataCurrent.totalResult : ", movieDataCurrent.totalResults);

		if (movieDataCurrent.Response === "True" && typeof movieDataCurrent.Search === "object") {
			setData((curr) => (curr = movieDataCurrent.Search));
			setTypeData((curr) => (curr = typeof movieDataCurrent.Search));
		} else if (movieDataCurrent.Response === "False" && typeof movieDataCurrent.Error === "string") {
			setData((curr) => (curr = movieDataCurrent.Error));
			setTypeData((curr) => (curr = typeof movieDataCurrent.Error));
		}
		return () => {};
	}, [movieDataCurrent]);

	const LoopDisplay = () => {
		const display = data.map((x) => (
			<div
				className="w-[320px] h-[700px] rounded-lg shadow-lg bg-red-400"
				key={x.imdbID}>
				<a
					href="#!"
					data-mdb-ripple="true"
					data-mdb-ripple-color="light">
					<img
						className="w-full h-[430px] rounded-t-lg"
						src={x.Poster === "N/A" ? "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2008/12/2/1228236540882/Gallery-Michigan-auto-ind-014.jpg?width=300&quality=85&auto=format&fit=max&s=99f448ce0f6e3909a707ef63d3df4c62" : x.Poster}
						alt={`poster ${x.Title}`}
					/>
				</a>
				<div className="h-[270px] p-6 flex flex-col justify-between items-start">
					<p className="w-full h-[85px] text-gray-900 text-xl font-medium overflow-hidden">{x.Title}</p>
					<div className="w-full flex flex-col justify-center items-start gap-2">
						<p className="w-full text-gray-700 text-base ">{x.Year}</p>
						<p className="w-full text-gray-700 text-base ">{capitalLetter(x.Type)}</p>
						<button
							type="button"
							className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
							Detail
						</button>
					</div>
				</div>
			</div>
		));

		return display;
	};

	return (
		<div>
			<div className="">
				<p className="">Hasil : {capitalLetter(title)}</p>
				<p className="">Total : {movieDataCurrent.totalResults ? movieDataCurrent.totalResults : `-`}</p>
			</div>
			{typeData === null ? "" : <div className="flex flex-row justify-evenly items-center flex-wrap gap-y-10">{typeData === "object" ? <LoopDisplay /> : `${movieDataCurrent.Error}`}</div>}
		</div>
	);
};

export default Display;
