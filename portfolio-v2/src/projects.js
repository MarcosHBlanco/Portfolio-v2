import clinicq from "./assets/clinicq.png";
import fireShip from "./assets/fireship.png";
import streamio from "./assets/streamio.png";
import pokedex from "./assets/pokedex.png";
import workout from "./assets/personalWorkoutGen.png";
import gamehub from "./assets/gamehub.png";
import funkostore from "./assets/funkostore.png";

export const PROJECTS = [
	{
		title: "ClinicQ — Dental Clinic Management System",
		image: clinicq,
		github: "https://github.com/MarcosHBlanco/clinicq",
		live: "https://clinicq-eta.vercel.app",
		description:
			"A full-stack clinic management application with role-based access for receptionists, dentists, and admins. Features a real-time patient queue with a workflow state machine, multi-criteria appointment search, and an analytics dashboard. Built with Next.js, TypeScript, Prisma, and PostgreSQL. Try the live demo with the credentials shown on the sign-in page.",
	},
	{
		title: "GameHub",
		image: gamehub,
		github: "https://github.com/MarcosHBlanco/GameHub",
		live: "https://gamehub-production-a4fa.up.railway.app/",
		description:
			"A dynamic PHP/MySQL web app that fetches and displays real-time game data using custom APIs, featuring infinite scroll, search, and responsive UI.",
	},
	{
		title: "Funko Store",
		image: funkostore,
		github: "https://github.com/MarcosHBlanco/Funko-Store",
		live: null,
		description:
			"An ASP.NET Core Razor Pages CRUD application for managing a collectible store, with Entity Framework Core, a normalized SQLite schema, and role-based authorization via ASP.NET Identity.",
	},
	{
		title: "Pokedex",
		image: pokedex,
		github: "https://github.com/MarcosHBlanco/Pokedex-App",
		live: "https://pokedex-app-nu-beryl.vercel.app/",
		description:
			"A full-featured React app with API integration — showcasing problem-solving and UI design skills.",
	},
	{
		title: "Personal Workout Generator",
		image: workout,
		github: "https://github.com/MarcosHBlanco/PersonalWorkoutGeneratorApp",
		live: "https://personal-workout-generator-app.vercel.app/",
		description:
			"A fitness app that generates personalized workout plans using the OpenAI API, taking user inputs like height, weight, experience level, and custom notes to tailor each plan.",
	},
	{
		title: "Streamio",
		image: streamio,
		github: "https://github.com/MarcosHBlanco/Stream.io",
		live: "https://marcoshblanco.github.io/Stream.io",
		description:
			"A visually rich streaming-platform UI built to push CSS and vanilla JavaScript — animations, layout, and interactive design without a framework.",
	},
	{
		title: "FireShip",
		image: fireShip,
		github: "https://github.com/MarcosHBlanco/FireShip",
		live: "https://marcoshblanco.itch.io/fire-ship",
		description:
			"Unity 2D space shooter where I explored game mechanics and polished my logical thinking skills.",
	},
];
