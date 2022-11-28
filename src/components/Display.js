import { useState, useEffect } from "react";
import { useMain } from "../context/main";
import { movieDataPage1, movieDataPage2, movieDataPage3, movieDataPage4, movieDataPage5, movieDataPage6, movieDataPage7, movieDataPage8, movieDataPage9, movieDataPage10 } from "../services/movies";
import { capitalLetter } from "../utils/capitalLetter";

const Display = () => {
	const main = useMain();
	const { title, currentPage, totalFilm, movieDataCurrent, MainSearch, MainTotalFilm, MainCurrentPage } = main;
	const [data, setData] = useState(null);
	const [typeData, setTypeData] = useState(null);

	useEffect(() => {
		if (movieDataCurrent.Response === "True" && typeof movieDataCurrent.Search === "object") {
			MainTotalFilm(Number(movieDataCurrent.totalResults));
			setData((curr) => (curr = movieDataCurrent.Search));
			setTypeData((curr) => (curr = typeof movieDataCurrent.Search));
		} else if (movieDataCurrent.Response === "False" && typeof movieDataCurrent.Error === "string") {
			MainTotalFilm(Number(movieDataCurrent.totalResults));
			setData((curr) => (curr = movieDataCurrent.Error));
			setTypeData((curr) => (curr = typeof movieDataCurrent.Error));
		}
		return () => {};
	}, [movieDataCurrent]);

	const LoopDisplay = () => {
		const display = data.map((x) => (
			<div
				className="w-[280px] h-[450px] "
				key={x.imdbID}>
				<a
					href="#!"
					data-mdb-ripple="true"
					data-mdb-ripple-color="light">
					<img
						className="w-full h-[350px] bg-center"
						src={x.Poster === "N/A" ? "https://images.unsplash.com/photo-1541523326621-f0ae9aa6deaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" : x.Poster}
						alt={x.Title}
						onClick={() => alert(x.Title)}
					/>
				</a>
				<div className="h-[100px] mt-2">
					<p
						className="w-full text-xl font-medium overflow-hidden text-center text-1 cursor-pointer"
						onClick={() => alert(x.Title)}>
						{x.Title}
					</p>
				</div>
			</div>
		));

		return display;
	};

	const page1 = async () => {
		MainSearch(title, await movieDataPage1(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(1);
	};

	const page2 = async () => {
		MainSearch(title, await movieDataPage2(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(2);
	};

	const page3 = async () => {
		MainSearch(title, await movieDataPage3(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(3);
	};

	const page4 = async () => {
		MainSearch(title, await movieDataPage4(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(4);
	};

	const page5 = async () => {
		MainSearch(title, await movieDataPage5(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(5);
	};

	const page6 = async () => {
		MainSearch(title, await movieDataPage6(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(6);
	};

	const page7 = async () => {
		MainSearch(title, await movieDataPage7(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(7);
	};

	const page8 = async () => {
		MainSearch(title, await movieDataPage8(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(8);
	};

	const page9 = async () => {
		MainSearch(title, await movieDataPage9(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(9);
	};

	const page10 = async () => {
		MainSearch(title, await movieDataPage10(title));
		MainTotalFilm(Number(movieDataCurrent.totalResults));
		MainCurrentPage(10);
	};

	return (
		<div>
			{/* header */}
			{typeData === null ? (
				""
			) : (
				<div className="mb-16 flex flex-col justify-center items-center">
					<p className="text-xl font-lora font-bold text-1 ">Hasil Pencarian : {capitalLetter(title)}</p>

					{typeData === "string" ? null : <p className="text-xl font-lora font-bold text-1 ">Jumlah Film : {totalFilm ? (totalFilm <= 100 ? totalFilm : 100) : 0}</p>}
				</div>
			)}

			{/* body  */}
			{typeData === null ? "" : <div className="flex flex-row justify-around items-center flex-wrap gap-5">{typeData === "object" ? <LoopDisplay /> : <p className="text-xl font-medium text-1">Sorry, {movieDataCurrent.Error}</p>}</div>}

			{/* footer */}
			{typeData === null ? (
				""
			) : (
				<div className="mt-10 flex flex-row justify-center items-center gap-3 text-lg font-medium">
					{totalFilm > 0 ? (
						<a
							href="#top"
							className={currentPage === 1 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page1}>
							1
						</a>
					) : null}

					{totalFilm > 10 ? (
						<a
							href="#top"
							className={currentPage === 2 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page2}>
							2
						</a>
					) : null}

					{totalFilm > 20 ? (
						<a
							href="#top"
							className={currentPage === 3 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page3}>
							3
						</a>
					) : null}

					{totalFilm > 30 ? (
						<a
							href="#top"
							className={currentPage === 4 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page4}>
							4
						</a>
					) : null}

					{totalFilm > 40 ? (
						<a
							href="#top"
							className={currentPage === 5 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page5}>
							5
						</a>
					) : null}

					{totalFilm > 50 ? (
						<a
							href="#top"
							className={currentPage === 6 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page6}>
							6
						</a>
					) : null}

					{totalFilm > 60 ? (
						<a
							href="#top"
							className={currentPage === 7 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page7}>
							7
						</a>
					) : null}

					{totalFilm > 70 ? (
						<a
							href="#top"
							className={currentPage === 8 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page8}>
							8
						</a>
					) : null}

					{totalFilm > 80 ? (
						<a
							href="#top"
							className={currentPage === 9 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page9}>
							9
						</a>
					) : null}

					{totalFilm > 90 ? (
						<a
							href="#top"
							className={currentPage === 10 ? "p-2 bg-1 rounded-[50%] text-4" : "p-2 text-1"}
							onClick={page10}>
							10
						</a>
					) : null}
				</div>
			)}
		</div>
	);
};

export default Display;
