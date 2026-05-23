import { useEffect, useState } from "react";

const SECTIONS = [
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "contact", label: "Contact" },
];

export default function Nav() {
	const [activeId, setActiveId] = useState(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible.length > 0) {
					setActiveId(visible[0].target.id);
				}
			},
			{
				rootMargin: "-40% 0px -40% 0px",
				threshold: [0, 0.25, 0.5, 0.75, 1],
			},
		);

		SECTIONS.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
			<ul className="flex items-center gap-1 px-2 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/90 backdrop-blur-sm">
				{SECTIONS.map(({ id, label }) => {
					const isActive = activeId === id;
					return (
						<li key={id}>
							<a
								href={`#${id}`}
								style={{
									transition: "background-color 500ms ease, color 500ms ease",
								}}
								className={`px-4 py-2 rounded-full text-sm ${
									isActive
										? "text-[var(--color-bg)] bg-[var(--color-accent)]"
										: "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
								}`}
							>
								{label}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
