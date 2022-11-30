import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes
				location={location}
				key={location.pathname}>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
