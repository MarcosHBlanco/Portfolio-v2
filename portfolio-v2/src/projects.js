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
		tech: [
			"Next.js",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"Tailwind",
			"Auth.js",
		],
		description:
			"A full-stack clinic management application with role-based access for receptionists, dentists, and admins. Features a real-time patient queue backed by a workflow state machine, multi-criteria appointment search, and an analytics dashboard. Try the live demo with the credentials shown on the sign-in page.",
	},
	{
		title: "GameHub",
		image: gamehub,
		github: "https://github.com/MarcosHBlanco/GameHub",
		live: "https://gamehub-production-a4fa.up.railway.app/",
		tech: ["PHP", "MySQL", "JavaScript", "REST API"],
		description:
			"A web app that integrates the RAWG API to search games and manage a personal library, with infinite scroll, search, CSRF protection, and prepared queries throughout.",
	},
	{
		title: "Funko Store",
		image: funkostore,
		github: "https://github.com/MarcosHBlanco/Funko-Store",
		live: null,
		tech: [
			"C#",
			"ASP.NET Core",
			"Entity Framework Core",
			"SQLite",
			"ASP.NET Identity",
		],
		description:
			"A Razor Pages CRUD application for managing a collectible store, with a normalized relational schema and role-based authorization gating admin-only routes from public users.",
	},
	{
		title: "Personal Workout Generator",
		image: workout,
		github: "https://github.com/MarcosHBlanco/PersonalWorkoutGeneratorApp",
		live: "https://personal-workout-generator-app.vercel.app/",
		tech: ["React", "OpenAI API", "JavaScript", "Tailwind"],
		description:
			"A fitness app that generates personalized workout plans using the OpenAI API, taking user inputs like height, weight, experience level, and custom notes to tailor each plan.",
	},
	{
		title: "Pokedex",
		image: pokedex,
		github: "https://github.com/MarcosHBlanco/Pokedex-App",
		live: "https://pokedex-app-nu-beryl.vercel.app/",
		tech: ["React", "JavaScript", "REST API"],
		description:
			"A React app that consumes the PokéAPI to search and browse Pokémon, with detail views and a responsive UI.",
	},
	{
		title: "Streamio",
		image: streamio,
		github: "https://github.com/MarcosHBlanco/Stream.io",
		live: "https://marcoshblanco.github.io/Stream.io",
		tech: ["HTML", "CSS", "JavaScript"],
		description:
			"A streaming-platform UI built without a framework to push CSS and vanilla JavaScript — animations, layout, and interactive components from the ground up.",
	},
	{
		title: "FireShip",
		image: fireShip,
		github: "https://github.com/MarcosHBlanco/FireShip",
		live: "https://marcoshblanco.itch.io/fire-ship",
		tech: ["Unity", "C#"],
		description:
			"A 2D space shooter built in Unity to explore game mechanics — movement, collision, scoring, and progression loops.",
	},
];
