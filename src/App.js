import { BrowserRouter } from "react-router-dom";
import MainProvider from "./context/main";
import Navigation from "./components/Navigation";
import NavigationPhone from "./components/NavigationPhone";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
	return (
		<MainProvider>
			<BrowserRouter>
				<Navigation />
				<NavigationPhone />
				<AnimatedRoutes />
			</BrowserRouter>
		</MainProvider>
	);
}

export default App;
