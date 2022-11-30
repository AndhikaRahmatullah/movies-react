// About.js

export const titleAbout = {
	hidden: {
		y: -600,
	},
	visible: {
		y: 0,
		transition: {
			type: "spring",
			stiffness: 50,
		},
	},
};

export const paragraphAbout = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 1,
		},
	},
};

export const socialMedia = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1.5,
			duration: 1,
		},
	},
	hover: {
		x: [2, -2],
		transition: {
			type: "spring",
			stiffness: 50,
			duration: 1,
			yoyo: Infinity,
		},
	},
};

export const instagram = {
	hidden: {
		x: -800,
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			delay: 3,
			stiffness: 50,
		},
	},
	whileHover: {
		scale: 1.3,
		originX: 0,
	},
};

export const linkedin = {
	hidden: {
		x: -900,
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			delay: 2.5,
			stiffness: 50,
		},
	},
	whileHover: {
		scale: 1.3,
		originX: 0,
	},
};

export const github = {
	hidden: {
		x: -1000,
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			delay: 2,
			stiffness: 50,
		},
	},
	whileHover: {
		scale: 1.3,
		originX: 0,
	},
};

// Carousel.js

export const imageCarousel = {
	hidden: {
		y: -800,
	},
	visible: {
		y: 0,
		transition: {
			type: "spring",
			delay: 0.5,
			stiffness: 50,
		},
	},
};

// Home.js

export const inputHome = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1.5,
			duration: 1,
		},
	},
};
