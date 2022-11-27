import { createContext, useContext, useReducer } from "react";

const InitialMainState = {
	title: "",
	movieDataCurrent: [],
};

const MainActions = {
	SET_TITLE: "SET_TITLE",
	SET_MOVIE_DATA_CURRENT: "SET_MOVIE_DATA_CURRENT",
};

const MainReducer = (state, action) => {
	switch (action.type) {
		case MainActions.SET_TITLE:
			return { ...state, title: action.payload.title };
		case MainActions.SET_MOVIE_DATA_CURRENT:
			return { ...state, movieDataCurrent: action.payload.movieDataCurrent };

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

	const MainSearch = (title, movieDataCurrent) => {
		dispatch({ type: MainActions.SET_TITLE, payload: { title: title } });
		dispatch({ type: MainActions.SET_MOVIE_DATA_CURRENT, payload: { movieDataCurrent: movieDataCurrent } });
	};

	return <MainContext.Provider value={{ ...state, MainSearch }}>{children}</MainContext.Provider>;
};

export default MainProvider;
