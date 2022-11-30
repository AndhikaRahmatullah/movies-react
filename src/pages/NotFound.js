import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	useEffect(() => {
		document.title = "Halaman Tidak Ditemukan | XXWan Mopis";

		return () => {
			document.title = "XXWan Mopis";
		};
	}, []);

	return (
		<div className="notFoundBg">
			<Link
				to="/"
				className="absolute top-2 left-2 z-50">
				<img
					src="https://img.icons8.com/plasticine/512/film-reel.png"
					alt="logo xxwan mopis"
					className="w-[50px]"
				/>
			</Link>
			<div className="min-h-screen flex flex-col justify-center items-center gap-4">
				<p
					className="p-10 text-3xl md:text-5xl xl:text-7xl text-4 font-bold tracking-widest font-lora animate-pulse text-center"
					style={{ textShadow: "5px 5px 10px #7EC8E3" }}>
					Halaman Tidak Ditemukan !
				</p>
				<p className="w-[350px] text-4 font-lora text-base md:text-lg lg:text-xl text-center">Hmm, halaman yang Anda cari sepertinya sudah tidak ada.</p>
				<Link
					to="/"
					className="p-2 text-xs md:text-sm lg:text-base bg-4 text-1 border-b-[3px] border-transparent font-bold rounded-md tracking-wide font-lora transition-all duration-[400ms] hover:bg-transparent hover:border-1 hover:rounded-none">
					Kembali ke XXWAN MOPIS
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
