import { createContext, useContext, useReducer } from "react";

const InitialMainState = {
	title: "",
	currentPage: 1,
	totalFilm: null,
	movieDataCurrent: [],
};

const MainActions = {
	SET_TITLE: "SET_TITLE",
	SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
	SET_TOTAL_FILM: "SET_TOTAL_FILM",
	SET_MOVIE_DATA_CURRENT: "SET_MOVIE_DATA_CURRENT",
};

const MainReducer = (state, action) => {
	switch (action.type) {
		case MainActions.SET_TITLE:
			return { ...state, title: action.payload.title };
		case MainActions.SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload.currentPage };
		case MainActions.SET_TOTAL_FILM:
			return { ...state, totalFilm: action.payload.totalFilm };
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

	const MainCurrentPage = (currentPage) => {
		dispatch({ type: MainActions.SET_CURRENT_PAGE, payload: { currentPage: currentPage } });
	};
	const MainTotalFilm = (totalFilm) => {
		dispatch({ type: MainActions.SET_TOTAL_FILM, payload: { totalFilm: totalFilm } });
	};

	return <MainContext.Provider value={{ ...state, MainSearch, MainCurrentPage, MainTotalFilm }}>{children}</MainContext.Provider>;
};

export default MainProvider;
