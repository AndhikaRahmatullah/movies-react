import { useState, useEffect, useRef } from "react";
import { useMain } from "../context/main";
import { movieData } from "../services/movies";
import Display from "../components/Display";

const Home = () => {
	const main = useMain();
	const { movieDataCurrent, MainSearch } = main;
	const [inputSearch, setInputSearch] = useState("");
	const searchInputRef = useRef();

	useEffect(() => {
		document.title = "XXWan Mopis";

		return () => {
			document.title = "XXWan Mopis";
		};
	}, []);

	const onInputSearch = (e) => {
		let value = e.target.value;
		setInputSearch(value);
	};

	const searchMovieAlternative = (e) => {
		if (e.key === "Enter") searchMovie();
	};

	const searchMovie = async () => {
		if (typeof movieDataCurrent === "object") {
			return MainSearch(inputSearch, await movieData(inputSearch));
		}
		MainSearch(inputSearch, await movieData(inputSearch));
	};

	return (
		<div className="mt-[100px] flex flex-col justify-center items-center">
			{/* container */}
			<div className="w-[1200px]">
				{/* key input */}
				<div className="mb-20 flex flex-row justify-center items-center">
					<input
						type="text"
						name="searchInput"
						ref={searchInputRef}
						value={inputSearch}
						onChange={onInputSearch}
						onKeyPress={searchMovieAlternative}
						placeholder="Masukan Judul Film"
						className="w-[500px] h-[46px] px-3 py-2 border-l-[3px] border-y-[3px] border-1 text-1 rounded-l-full outline-none shadow-xl bg-transparent transition-all duration-500 placeholder:text-1 focus:bg-1 focus:text-4 focus:placeholder:text-4"
					/>
					<button
						onClick={searchMovie}
						className="w-[70px] h-[46px] px-5 py-2 border-[3px] border-1 bg-1 rounded-r-full shadow-xl">
						<img
							src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/512/external-search-logistic-delivery-kiranshastry-gradient-kiranshastry.png"
							alt="search"
							className="h-full"
						/>
					</button>
				</div>
				<Display />
			</div>
		</div>
	);
};

export default Home;
