import { createContext, useContext, useReducer } from "react";

const InitialMainState = {
	title: "",
	movieData: [],
};

const MainActions = {
	SET_TITLE: "SET_TITLE",
	SET_MOVIE_DATA: "SET_MOVIE_DATA",
};

const MainReducer = (state, action) => {
	switch (action.type) {
		case MainActions.SET_TITLE:
			return { ...state, title: action.payload.title };
		case MainActions.SET_MOVIE_DATA:
			return { ...state, movieData: action.payload.movieData };

		default:
			break;
	}
};

const MainContext = createContext();

export const useMain = () => {
	return useContext(MainContext);
};

const MainProvider = ({ children }) => {
	const [state, dispatch] = useReducer(MainReducer, InitialMainState);

	const MainSearch = (title, movieData) => {
		dispatch({ type: MainActions.SET_TITLE, payload: { title: title } });
		dispatch({ type: MainActions.SET_MOVIE_DATA, payload: { movieData: movieData } });
	};

	return <MainContext.Provider value={{ ...state, MainSearch }}>{children}</MainContext.Provider>;
};

export default MainProvider;
