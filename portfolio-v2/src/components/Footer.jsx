export default function Footer() {
	return (
		<footer className="py-12 px-6 md:px-12 border-t border-[var(--color-border)]">
			<div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-[var(--color-text-dim)]">
				<p>© {new Date().getFullYear()} Marcos Blanco</p>
				<div className="flex gap-6">
					<a
						href="https://github.com/MarcosHBlanco"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[var(--color-accent)] transition-colors"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/marcoshblanco/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[var(--color-accent)] transition-colors"
					>
						LinkedIn
					</a>
					<a
						href="mailto:marcoshblanco@gmail.com"
						className="hover:text-[var(--color-accent)] transition-colors"
					>
						Email
					</a>
				</div>
			</div>
		</footer>
	);
}
