import axios from "axios";

export const movieDataPage1 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage2 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=2`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage3 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=3`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage4 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=4`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage5 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=5`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage6 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=6`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage7 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=7`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage8 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=8`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage9 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=9`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export const movieDataPage10 = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}&page=10`);
		return response.data;
	} catch (error) {
		return error.message;
	}
};
