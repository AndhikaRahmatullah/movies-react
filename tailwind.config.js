// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				lora: ["Lora"], //4 5 6 7
				roboto: ["Roboto"], //1 3 4 5 7 9
			},
			colors: {
				1: "#050A30",
				2: "#000C66",
				3: "#0000FF",
				4: "#7EC8E3",
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
