import { useEffect } from "react";
import { useMain } from "../context/main";
import { motion } from "framer-motion";
import { instagram, linkedin, github, paragraphAbout, titleAbout, socialMedia } from "../utils/variantsMotion";

const About = () => {
	const main = useMain();
	const { MainSearch } = main;

	useEffect(() => {
		document.title = "Tentang | XXWan Mopis";

		return () => {};
	}, []);

	return (
		<div className="mt-[100px] mb-[50px] flex flex-col justify-center items-center">
			{/* container */}
			<div
				id="containerAbout"
				className="w-[350px] md:w-[750px] lg:w-[950px] xl:w-[1250px] min-[1400px]:w-[1400px] transition-all duration-700">
				{/* title */}
				<motion.p
					variants={titleAbout}
					initial="hidden"
					animate="visible"
					className="mb-5 text-xl md:text-2xl lg:text-3xl text-1 text-center tracking-wider font-bold font-lora">
					Tentang XXWan Mopis
				</motion.p>

				{/* paragraph */}
				<motion.p
					variants={paragraphAbout}
					initial="hidden"
					animate="visible"
					className="md:mx-[100px] lg:mx-[200px] min-[1400]:mx-[300px] text-sm md:text-base lg:text-lg text-1 text-center tracking-wide">
					XXWan Mopis adalah salah satu aplikasi sederhana berbasis web yang saya buat. Aplikasi ini dibuat menggunakan Teknologi React, TailwnidCSS dan beberapa plugin lainnya sebagai pendukung.
				</motion.p>

				{/* socialMedia */}
				<div className="mt-5 md:mt-7 lg:mt-20 md:mx-[100px] lg:mx-[200px] min-[1400]:mx-[300px] flex justify-center items-center">
					<motion.p
						variants={socialMedia}
						initial="hidden"
						animate="visible"
						whileHover="hover"
						drag
						dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
						className="w-fit text-sm md:text-base lg:text-lg text-1 font-bold tracking-wide text-center cursor-pointer">
						Sosial Media :
					</motion.p>
				</div>

				<div className="mt-2 flex justify-center items-center gap-4">
					{/* instagram */}
					<motion.a
						variants={instagram}
						initial="hidden"
						animate="visible"
						whileHover="whileHover"
						exit="exit"
						href="https://www.instagram.com/andhikarhmt_/"
						target="blank_"
						className="w-[40px] md:w-[45px] lg:w-[50px]">
						<img
							src="https://img.icons8.com/3d-fluency/512/instagram-new.png"
							alt="instagram"
							className=""
						/>
					</motion.a>

					{/* linkedin */}
					<motion.a
						variants={linkedin}
						initial="hidden"
						animate="visible"
						whileHover="whileHover"
						href="https://www.linkedin.com/in/andhika-rahmatullah-2039b0157/"
						target="blank_"
						className="w-[40px] md:w-[45px] lg:w-[50px]">
						<img
							src="https://img.icons8.com/3d-fluency/512/linkedin.png"
							alt="linkedin"
							className=""
						/>
					</motion.a>

					{/* github */}
					<motion.a
						variants={github}
						initial="hidden"
						animate="visible"
						whileHover="whileHover"
						href="https://github.com/AndhikaRahmatullah"
						target="blank_"
						className="w-[40px] md:w-[45px] lg:w-[50px]">
						<img
							src="https://img.icons8.com/3d-fluency/512/github.png"
							alt="github"
							className=""
						/>
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default About;
