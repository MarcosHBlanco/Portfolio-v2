import About from "./components/About";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import "./index.css";

function App() {
	return (
		<div className="flex justify-center w-full h-screen">
			<div className="md:grid md:grid-cols-2 md:gap-4 md:w-full">
				<Intro />
				<div className="overflow-y-auto">
					<About></About>
					<Projects />
				</div>
			</div>
		</div>
	);
}

export default App;
