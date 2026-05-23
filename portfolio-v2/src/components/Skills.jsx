/* eslint-disable react/jsx-no-comment-textnodes */
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
					<span className="text-accent">//</span>Skills
				</p>

				<div className="space-y-10">
					{SKILL_GROUPS.map((group) => (
						<div key={group.label}>
							<h3 className="text-sm text-[var(--color-text-muted)] mb-4 font-medium uppercase tracking-wide">
								{group.label}
							</h3>
							<ul className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<li
										key={item}
										className="px-3 py-1 text-sm border rounded-md border-[var(--color-border)] text-[var(--color-text)] bg-[var(--color-bg-elevated)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
