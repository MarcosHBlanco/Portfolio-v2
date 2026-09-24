import sift from "./assets/sift.png";
import clinicq from "./assets/clinicq.png";
import workout from "./assets/personalWorkoutGen.png";
import gamehub from "./assets/gamehub.png";
import funkostore from "./assets/funkostore.png";

export const PROJECTS = [
	{
		title: "Sift — AI Email Triage App",
		image: sift,
		github: "https://github.com/MarcosHBlanco/email-agent",
		live: "https://siftmail.vercel.app",
		video: "https://youtu.be/cmlmCiqN5x4",
		tech: [
			"Python",
			"FastAPI",
			"React",
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Claude API",
			"Gmail API",
			"pytest",
		],
		description:
			"A privacy-first app that reads a user's Gmail, sorts each email with the Claude API, and delivers a scheduled daily digest. Email bodies are never stored, only fetched when opened. Defends against prompt injection by keeping untrusted email content separate from the user's instructions, and is covered by a 45-test pytest suite.",
	},
	{
		title: "ClinicQ — Dental Clinic Management System",
		image: clinicq,
		github: "https://github.com/MarcosHBlanco/clinicq",
		live: "https://clinicq-eta.vercel.app",
		tech: [
			"React",
			"Next.js",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"Tailwind",
			"Auth.js",
		],
		description:
			"A full-stack clinic management application built from 4.5 years of clinical practice. Permissions for receptionists, dentists, and admins are checked inside every server action, and a state machine rejects invalid appointment status changes. Includes multi-criteria appointment search and an analytics dashboard. Try the live demo with the credentials shown on the sign-in page.",
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
			"A Razor Pages CRUD application for a collectible store, built during my software development bootcamp with Entity Framework Core migrations and ASP.NET Identity role-based authorization for admin-only pages.",
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
];
