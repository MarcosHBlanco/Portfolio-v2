const SKILL_GROUPS = [
	{
		label: "Languages",
		items: [
			"JavaScript",
			"TypeScript",
			"Java",
			"C#",
			"C++",
			"PHP",
			"SQL",
			"HTML/CSS",
		],
	},
	{
		label: "Frameworks & Libraries",
		items: [
			"React",
			"Next.js",
			"Node.js",
			"ASP.NET Core",
			"Entity Framework Core",
			"Prisma",
			"Tailwind",
		],
	},
	{
		label: "Databases",
		items: ["PostgreSQL", "MySQL", "SQLite", "Relational Data Modeling"],
	},
	{
		label: "Tools & Concepts",
		items: [
			"Git",
			"GitHub",
			"GitHub Actions",
			"REST APIs",
			"JSON",
			"OOP",
			"Authentication",
			"Role-Based Access Control",
		],
	},
];

export default function Skills() {
	return (
		<section
			id="skills"
			className="py-32 px-6 md:px-12 border-t border-[var(--color-border)]"
		>
			<div className="max-w-3xl mx-auto w-full">
				<p className="text-sm text-[var(--color-text-dim)] mb-12 tracking-wide uppercase">
					Skills
				</p>

				<div className="space-y-10">
					{SKILL_GROUPS.map((group) => (
						<div key={group.label}>
							<h3 className="text-sm text-[var(--color-text-muted)] mb-4 font-medium">
								{group.label}
							</h3>
							<ul className="flex flex-wrap gap-x-6 gap-y-3 text-base md:text-lg text-[var(--color-text)]">
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
