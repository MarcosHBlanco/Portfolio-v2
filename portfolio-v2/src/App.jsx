import Menu from "./components/Menu";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
	return (
		<div className="bg-gray-900 text-white min-h-screen">
			<Menu />

			<div className="md:grid md:grid-cols-2 pt-24 md:h-[calc(100vh-6rem)]">
				<div className="px-6 py-8 flex items-start justify-center">
					<Intro />
				</div>
				<div className="px-6 py-8 overflow-y-auto scroll-smooth">
					<About />
					<Projects />
					<Contact />
				</div>
			</div>
		</div>
	);
}
