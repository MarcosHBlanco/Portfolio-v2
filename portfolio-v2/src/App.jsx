import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
	return (
		<main className="min-h-screen">
			<Intro />
			<About />
			<Projects />
			<Contact />
		</main>
	);
}
