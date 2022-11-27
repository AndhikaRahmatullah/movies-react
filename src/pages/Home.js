import { useState, useEffect } from "react";
import { useMain } from "../context/main";
import { movieData } from "../services/movies";

const Home = () => {
	const main = useMain();
	const { MainSearch } = main;
	const [inputSearch, setInputSearch] = useState("");

	useEffect(() => {
		document.title = "XXWan Mopis";

		return () => {
			document.title = "XXWan Mopis";
		};
	}, []);

	useEffect(() => {
		// console.log(main);
		return () => {};
	}, [main]);

	const onInputSearch = (e) => {
		let value = e.target.value;
		setInputSearch(value);
	};

	const searchMovieAlternative = (e) => {
		if (e.key === "Enter") searchMovie();
	};

	const searchMovie = async () => {
		MainSearch(inputSearch, await movieData(inputSearch));
	};

	return (
		<div className="mt-[100px] flex flex-col justify-center items-center">
			<div className="w-[1200px] flex flex-row justify-center items-center">
				<input
					type="text"
					name="searchInput"
					value={inputSearch}
					onChange={onInputSearch}
					onKeyPress={searchMovieAlternative}
					placeholder="Masukan Judul Film"
					className="w-[500px] px-3 py-2 border-l-[3px] border-y-[3px] border-1 text-1 rounded-l-full outline-none shadow-xl bg-transparent transition-all duration-500 placeholder:text-1 focus:bg-1 focus:text-4 focus:placeholder:text-4"
				/>
				<button
					onClick={searchMovie}
					className="px-5 py-2 border-[3px] border-1 text-1 bg-transparent rounded-r-full shadow-xl transition-all duration-300 hover:bg-1 hover:text-4">
					Cari
				</button>
			</div>
			<p className="">{main.title}</p>
		</div>
	);
};

export default Home;
