export default function About() {
	return (
		<section
			id="about"
			className="py-32 px-6 md:px-12 border-t border-[var(--color-border)]"
		>
			<div className="max-w-3xl mx-auto w-full">
				<p className="text-sm text-[var(--color-text-dim)] mb-8 tracking-wide uppercase">
					About
				</p>

				<div className="space-y-6 text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
					<p>
						I practiced dentistry in Brazil for four and a half years before
						moving to Canada and starting over in software. The reasons were a
						mix of professional and personal, and the decision was deliberate —
						not impulsive.
					</p>

					<p>
						What I brought with me: a habit of working carefully on things
						people depend on, a tolerance for difficult problems that take time
						to solve, and an appreciation for systems where correctness matters
						more than speed.
					</p>

					<p>
						What I&apos;m building now: full-stack web applications in
						TypeScript, React, Next.js, C# and .NET, and Java. Most recently{" "}
						<a
							href="https://clinicq-eta.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--color-text)] border-b border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
						>
							ClinicQ
						</a>
						, a deployed clinic management system with role-based access, an
						appointment workflow engine, and an analytics dashboard. The product
						decisions came directly from years of working in real clinics.
					</p>
				</div>
			</div>
		</section>
	);
}
