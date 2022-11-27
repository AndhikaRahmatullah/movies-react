import axios from "axios";

export const movieData = async (title) => {
	try {
		const response = await axios.get(`https://www.omdbapi.com/?apikey=da37d5ef&s=${title}`);
		const result = response.data;
		if (result.Response === "True") {
			return result.Search;
		} else {
			return result.Error;
		}
	} catch (error) {
		return (error.message);
	}
};
