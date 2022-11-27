import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainProvider from "./context/main";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
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
						path="/favorite"
						element={<Favorite />}
					/>
				</Routes>
			</BrowserRouter>
		</MainProvider>
	);
}

export default App;
