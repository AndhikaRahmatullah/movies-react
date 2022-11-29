import { useState, useEffect, useRef } from "react";
import { useMain } from "../context/main";
import { movieDataPage1 } from "../services/movies";
import Display from "../components/Display";
import Carousel from "../components/Carousel";

const Home = () => {
	const main = useMain();
	const { MainSearch, MainCurrentPage } = main;
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
		if (!inputSearch) {
			return null;
		}
		MainSearch(inputSearch, await movieDataPage1(inputSearch));
		MainCurrentPage(1);
		searchInputRef.current.blur();
		setInputSearch("");
	};

	return (
		<div className="mt-[100px] mb-[50px] flex flex-col justify-center items-center">
			{/* container */}
			<div
				className="w-[350px] md:w-[750px] lg:w-[950px] xl:w-[1250px] min-[1400px]:w-[1400px] transition-all duration-700"
				id="containerHome">
				<Carousel />
				{/* key input */}
				<div className="mb-10 flex flex-row justify-center items-center">
					<input
						type="text"
						name="searchInput"
						ref={searchInputRef}
						value={inputSearch}
						onChange={onInputSearch}
						onKeyPress={searchMovieAlternative}
						placeholder="Masukan Judul Film"
						className="w-full md:w-[500px] h-[40px] md:h-[46px] text-sm md:text-base lg:text-lg px-3 py-2 border-l-[3px] border-y-[3px] border-1 text-1 rounded-l-full outline-none shadow-xl bg-transparent transition-all duration-500 placeholder:text-1 focus:bg-1 focus:text-4 focus:placeholder:text-4"
					/>
					<a
						href="#display"
						onClick={searchMovie}
						className="w-[70px] h-[40px] md:h-[46px] px-5 py-2 border-[3px] border-1 bg-1 rounded-r-full shadow-xl">
						<img
							src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/512/external-search-logistic-delivery-kiranshastry-gradient-kiranshastry.png"
							alt="search"
							className="w-[70px] md:w-full h-full"
						/>
					</a>
				</div>
				<Display />
			</div>
		</div>
	);
};

export default Home;
