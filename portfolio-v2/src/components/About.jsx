/* eslint-disable react/jsx-no-comment-textnodes */
export default function About() {
	return (
		<section
			id="about"
			className="py-32 px-6 md:px-12 border-t border-[var(--color-border)]"
		>
			<div className="max-w-5xl mx-auto w-full">
				<p className="text-sm text-[var(--color-text-dim)] mb-12 tracking-wide uppercase">
					<span className="text-accent">//</span>About
				</p>

				<div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
					<div className="md:col-span-5">
						<div className="border rounded-lg border-[var(--color-border)] bg-[var(--color-bg-elevated)] overflow-hidden">
							<div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]">
								<span className="w-3 h-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]"></span>
								<span className="w-3 h-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]"></span>
								<span className="w-3 h-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]"></span>
								<span className="ml-2 text-xs text-[var(--color-text-dim)] font-mono">
									marcos@portfolio
								</span>
							</div>
							<div className="p-5 font-mono text-sm space-y-2">
								<p>
									<span className="text-[var(--color-text-dim)]">$ </span>
									<span className="text-[var(--color-text)]">whoami</span>
								</p>
								<p className="text-[var(--color-accent)]">marcos_blanco</p>

								<p className="pt-2">
									<span className="text-[var(--color-text-dim)]">$ </span>
									<span className="text-[var(--color-text)]">
										cat background.txt
									</span>
								</p>
								<p className="text-[var(--color-text-muted)]">
									4.5 yrs practicing dentistry in Brazil
								</p>
								<p className="text-[var(--color-text-muted)]">
									CS diploma @ Langara College
								</p>
								<p className="text-[var(--color-text-muted)]">
									based in Vancouver, BC
								</p>

								<p className="pt-2">
									<span className="text-[var(--color-text-dim)]">$ </span>
									<span className="text-[var(--color-text)]">echo $STATUS</span>
								</p>
								<p className="text-[var(--color-accent)]">
									open to Fall 2026 co-op
								</p>
							</div>
						</div>
					</div>

					<div className="md:col-span-7 space-y-5 text-base text-[var(--color-text-muted)] leading-relaxed">
						<p>
							I practiced dentistry in Brazil for four and a half years before
							moving to Canada and starting over in software. The reasons were a
							mix of professional and personal, and the decision was deliberate
							— not impulsive.
						</p>

						<p>
							What I brought with me: a habit of working carefully on things
							people depend on, a tolerance for difficult problems that take
							time to solve, and an appreciation for systems where correctness
							matters more than speed.
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
							appointment workflow engine, and an analytics dashboard. The
							product decisions came directly from years of working in real
							clinics.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
