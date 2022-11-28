import axios from "axios";

export const movieDataOnDisplay = async (title) => {
	return await movieDataPage1(title);
};

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
		const result = response.data;
		if (result.Response === "True") {
			return result.Search;
		} else {
			return result.Error;
		}
	} catch (error) {
		return error.message;
	}
};
