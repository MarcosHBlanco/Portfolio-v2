import { PROJECTS } from "../projects";

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-32 px-6 md:px-12 border-t border-[var(--color-border)]"
		>
			<div className="max-w-5xl mx-auto w-full">
				<p className="text-sm text-[var(--color-text-dim)] mb-12 tracking-wide uppercase">
					Selected projects
				</p>

				<div className="space-y-8">
					{PROJECTS.map((project, idx) => (
						<article
							key={idx}
							className="group grid md:grid-cols-12 gap-8 md:gap-12 items-center p-6 md:p-8 border rounded-lg border-[var(--color-border)] transition-colors duration-200 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-dim)]"
						>
							<div className="md:col-span-5">
								<div className="aspect-video overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										loading="lazy"
										className="object-cover w-full h-full"
									/>
								</div>
							</div>

							<div className="md:col-span-7 space-y-4">
								<h3 className="text-2xl md:text-3xl font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
									{project.title}
								</h3>

								<p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
									{project.description}
								</p>

								{project.tech && project.tech.length > 0 && (
									<p className="text-sm text-[var(--color-text-dim)] font-mono">
										{project.tech.join(" · ")}
									</p>
								)}

								<div className="flex flex-wrap gap-6 text-sm pt-2">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors border-b border-[var(--color-border)] hover:border-[var(--color-accent)] pb-1"
									>
										GitHub
									</a>
									{project.live && (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors border-b border-[var(--color-border)] hover:border-[var(--color-accent)] pb-1"
										>
											Live demo
										</a>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
