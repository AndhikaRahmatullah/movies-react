import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainProvider from "./context/main";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

function App() {
	return (
		<MainProvider>
			<BrowserRouter>
				<Navigation />
				<Routes>
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
			</BrowserRouter>
		</MainProvider>
	);
}

export default App;
