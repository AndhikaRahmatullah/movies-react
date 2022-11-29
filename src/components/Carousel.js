import React from "react";

const Carousel = () => {
	return (
		<div className="mb-10 flex justify-center items-center">
			<div
				id="carouselExampleControls"
				className="carousel slide relative w-full"
				data-bs-ride="carousel">
				<div className="carousel-inner relative w-full overflow-hidden rounded-md">
					<div className="carousel-item active relative float-left w-full">
						<img
							src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
							className="block w-full h-[280px] md:h-[320px] lg:h-[525px]"
							alt="Carousel 1"
						/>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src="https://images.unsplash.com/photo-1535446937720-e4cad0145efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
							className="block w-full h-[280px] md:h-[320px] lg:h-[525px]"
							alt="Carousel 2"
						/>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
							className="block w-full h-[280px] md:h-[320px] lg:h-[525px]"
							alt="Carousel 3"
						/>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
							className="block w-full h-[280px] md:h-[320px] lg:h-[525px]"
							alt="Carousel 4"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon inline-block bg-no-repeat"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon inline-block bg-no-repeat"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
