import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMain } from "../context/main";
import { detailFilm } from "../services/movies";
import { capitalLetter } from "../utils/capitalLetter";
import { motion } from "framer-motion";

const DetailFilm = () => {
	const { idFilm, selectFilm } = useMain();
	const [data, setData] = useState(null);

	useEffect(() => {
		document.title = `${selectFilm} | XXWan Mopis`;
		valueData();
		return () => {
			setData(null);
		};
	}, []);

	const valueData = async () => setData(await detailFilm(idFilm));

	const variantsMotionParents = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 1.5,
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
	};

	const variantsMotionChild = {
		hidden: {
			x: 2000,
		},
		visible: {
			x: 0,
			transition: {
				type: "spring",
				stiffness: 50,
				ease: "easeIn",
			},
		},
	};

	return (
		<div className="mt-[100px] mb-[50px] flex flex-col justify-center items-center">
			{/* container */}
			<div
				className="w-[350px] md:w-[750px] lg:w-[950px] xl:w-[1250px] min-[1400px]:w-[1400px] transition-all duration-700"
				id="containerDetailFilm">
				{data && (
					<div className="flex flex-col lg:flex-row justify-start items-center gap-5">
						<div className="">
							<motion.img
								initial={{ y: -1000 }}
								animate={{ y: 0 }}
								transition={{ type: "spring", stiffness: 60, delay: 0.5, duration: 1 }}
								src={data.Poster}
								alt={data.Title}
								className="xl:min-w-[400px] xl:w-[400px] xl:min-h-[550px] xl:h-[550px]
								lg:min-w-[300px] lg:w-[300px] lg:min-h-[500px] lg:h-[500px]
								md:min-w-[300px] md:w-[300px] md:min-h-[400px] md:h-[400px]
								min-w-[300px] w-[300px] min-h-[350px] h-[350px]
								shadow-2xl"
							/>
						</div>
						<div className="flex flex-col justify-start gap-5 ">
							{/* title */}
							<motion.p
								initial={{ y: -500 }}
								animate={{ y: 0 }}
								transition={{ type: "spring", stiffness: 60, delay: 1, duration: 1 }}
								className="text-xl md:text-2xl xl:text-3xl font-lora font-bold text-1 tracking-wider text-center lg:text-start">
								{data.Title}
							</motion.p>
							{/* data */}
							<motion.div
								variants={variantsMotionParents}
								initial="hidden"
								animate="visible"
								className="text-sm md:text-base xl:text-lg flex flex-col gap-2 text-1 tracking-wide">
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Tahun</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Year}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Waktu</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Runtime}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Genre</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Genre}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Produser</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Director}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Penulis</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Writer}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Pemeran</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Actors}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Sinopsis</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Plot}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Bahasa</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Language}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Negara</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.Country}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Penghargaan</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {capitalLetter(data.Awards)}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Jenis</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {capitalLetter(data.Type)}</p>
								</motion.div>
								<motion.div
									variants={variantsMotionChild}
									className="flex flex-row">
									<p className="w-[95px] md:w-[115px] lg:w-[130px]">Rating (IMDB)</p>
									<p className="w-[250px] md:w-[600px] lg:w-[500px] xl:w-[800px]">: {data.imdbRating} / 10</p>
								</motion.div>
							</motion.div>
							{/* button back */}
							<div className="mt-10 lg:mt-0 flex justify-center items-center">
								<motion.div
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										delay: 6,
										default: {
											duration: 0.3,
											ease: [0, 0.71, 0.2, 1.01],
										},
										scale: {
											type: "spring",
											damping: 5,
											stiffness: 100,
											restDelta: 0.001,
										},
									}}
									className="">
									<Link
										to="/"
										className="p-2 text-sm md:text-base xl:text-lg flex flex-col gap-2 text-4 bg-1 rounded-lg tracking-widest shadow-2xl shadow-gray-500 font-lora font-semibold transition-all duration-300 hover:scale-95 active:scale-95">
										Kembali
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default DetailFilm;
