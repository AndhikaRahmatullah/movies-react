import { useState, useEffect } from "react";
import { useMain } from "../context/main";

const Display = () => {
	const main = useMain();
	const { title, movieDataCurrent } = main;
	const [data, setData] = useState(null);
	const [typeData, setTypeData] = useState("");

	useEffect(() => {
		if (movieDataCurrent.length >= 1) {
			setData((curr) => (curr = movieDataCurrent));
			setTypeData((curr) => (curr = typeof movieDataCurrent));
		}
		return () => {};
	}, [movieDataCurrent]);

	const LoopDisplay = () => {
		const display = data.map((x) => {
			return (
				<div
					className="rounded-lg shadow-lg bg-white max-w-sm"
					key={x.imdbID}>
					<a
						href="#!"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light">
						<img
							className="rounded-t-lg"
							src={x.Poster === "N/A" ? "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2008/12/2/1228236540882/Gallery-Michigan-auto-ind-014.jpg?width=300&quality=85&auto=format&fit=max&s=99f448ce0f6e3909a707ef63d3df4c62" : x.Poster}
							alt={`poster ${x.Title}`}
						/>
					</a>
					<div className="p-6">
						<h5 className="text-gray-900 text-xl font-medium mb-2">{x.Title}</h5>
						<p className="text-gray-700 text-base mb-4">{x.Year}</p>
						<p className="text-gray-700 text-base mb-4">{x.Type}</p>
						<button
							type="button"
							className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
							Button
						</button>
					</div>
				</div>
			);
		});

		return display;
	};

	return (
		<div>
			<div className="flex flex-row justify-center items-center flex-wrap">{typeData === "object" ? <LoopDisplay /> : `${movieDataCurrent}`}</div>
		</div>
	);
};

export default Display;
