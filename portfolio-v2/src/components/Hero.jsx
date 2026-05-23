export default function Hero() {
	return (
		<section className="min-h-screen flex items-center px-6 md:px-12">
			<div className="max-w-3xl mx-auto w-full">
				<p className="text-sm md:text-base text-[var(--color-text-dim)] mb-6 tracking-wide uppercase">
					Marcos Blanco
				</p>

				<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight mb-8 text-[var(--color-text)]">
					From dentistry to software.
					<br />
					<span className="text-[var(--color-accent)]">
						I build full-stack web apps now.
					</span>
				</h1>

				<p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl leading-relaxed mb-12">
					Computer Science student at Langara College. Based in Vancouver.
					Currently looking for Fall 2026 co-op opportunities in software
					development.
				</p>

				<div className="flex flex-wrap gap-6 text-base">
					<a
						href="#projects"
						className="border-b border-[var(--color-accent)] pb-1 hover:text-[var(--color-accent)] transition-colors"
					>
						View projects
					</a>
					<a
						href="https://github.com/MarcosHBlanco"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/marcoshblanco/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
					>
						LinkedIn
					</a>
					<a
						href="mailto:marcoshblanco@gmail.com"
						className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
					>
						Email
					</a>
				</div>
			</div>
		</section>
	);
}
