import fireShip from "./assets/fireship.png";
import streamio from "./assets/streamio.png";
import investment from "./assets/investment-calculator.png";
import pokedex from "./assets/pokedex.png";
import workout from "./assets/personalWorkoutGen.png";
import portfoliov1 from "./assets/portfoliov1.png";
import gamehub from "./assets/gamehub.png";

export const PROJECTS = [
	{
		title: "GameHub",
		image: gamehub,
		github: "https://github.com/MarcosHBlanco/GameHub",
		live: "https://gamehub-production-a4fa.up.railway.app/",
		description:
			"A dynamic PHP/MySQL web app that fetches and displays real-time game data using custom APIs, featuring infinite scroll, search, and responsive UI.",
	},
	{
		title: "Pokedex",
		image: pokedex,
		github: "https://github.com/MarcosHBlanco/Pokedex-App",
		live: "https://pokedex-app-nu-beryl.vercel.app/",
		description:
			"A full-featured React app with API integration — my most ambitious project, showcasing problem-solving and UI design skills.",
	},
	{
		title: "Personal Workout Generator",
		image: workout,
		github: "https://github.com/MarcosHBlanco/PersonalWorkoutGeneratorApp",
		live: "https://personal-workout-generator-app.vercel.app/",
		description:
			"AI-powered fitness planner that creates custom workouts based on user goals.",
	},
	{
		title: "Streamio",
		image: streamio,
		github: "https://github.com/MarcosHBlanco/Stream.io",
		live: "https://marcoshblanco.github.io/Stream.io",
		description:
			"Streaming platform prototype inspired by Prime Video and Disney+.",
	},
	{
		title: "Investment Calculator",
		image: investment,
		github: "https://github.com/MarcosHBlanco/Investment_Calculator",
		live: "https://marcoshblanco.github.io/Investment_Calculator/",
		description:
			"Interactive React tool for investment projection and clean design.",
	},
	{
		title: "FireShip",
		image: fireShip,
		github: "https://github.com/MarcosHBlanco/FireShip",
		live: "https://marcoshblanco.itch.io/fire-ship",
		description:
			"Unity 2D space shooter where I explored game mechanics and polished my logical thinking skills.",
	},
	{
		title: "Web Portfolio v1",
		image: portfoliov1,
		github: "https://github.com/MarcosHBlanco/WebPortfolio",
		live: "https://marcoshblanco.github.io/WebPortfolio/",
		description:
			"My first portfolio, built purely with HTML & CSS to showcase creativity and front-end styling skills.",
	},
];
