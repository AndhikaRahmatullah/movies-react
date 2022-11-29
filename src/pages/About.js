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
		<div className="mt-[100px] mb-[50px] flex flex-col justify-center items-center">
			{/* container */}
			<div
				id="containerAbout"
				className="w-[350px] md:w-[750px] lg:w-[950px] xl:w-[1250px] min-[1400px]:w-[1400px] transition-all duration-700">
				<p className="md:mx-[100px] lg:mx-[200px] min-[1400]:mx-[300px] text-sm md:text-base lg:text-lg text-1 text-center tracking-wide">XXWan Mopis adalah salah satu aplikasi sederhana berbasis web yang saya buat. Aplikasi ini dibuat menggunakan Teknologi React, TailwnidCSS dan beberapa plugin lainnya sebagai pendukung.</p>
				<p className="mt-5 md:mt-7 lg:mt-10 md:mx-[100px] lg:mx-[200px] min-[1400]:mx-[300px] text-sm md:text-base lg:text-lg text-1 font-bold tracking-wide text-center">Sosial Media :</p>
				<div className="mt-2 lg:mt-5 flex justify-center items-center gap-4">
					{/* instagram */}
					<a
						href="https://www.instagram.com/andhikarhmt_/"
						target="blank_"
						className="w-[40px] md:w-[45px] lg:w-[50px]">
						<img
							src="https://img.icons8.com/3d-fluency/512/instagram-new.png"
							alt="instagram"
							className=""
						/>
					</a>
					{/* linkedin */}
					<a
						href="https://www.linkedin.com/in/andhika-rahmatullah-2039b0157/"
						target="blank_"
						className="w-[40px] md:w-[45px] lg:w-[50px]">
						<img
							src="https://img.icons8.com/3d-fluency/512/linkedin.png"
							alt="linkedin"
							className=""
						/>
					</a>
					{/* github */}
					<a
						href="https://github.com/AndhikaRahmatullah"
						target="blank_"
						className="w-[40px] md:w-[45px] lg:w-[50px]">
						<img
							src="https://img.icons8.com/3d-fluency/512/github.png"
							alt="github"
							className=""
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
