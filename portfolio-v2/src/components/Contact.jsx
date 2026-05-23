export default function Contact() {
	return (
		<section
			id="contact"
			className="py-32 px-6 md:px-12 border-t border-[var(--color-border)]"
		>
			<div className="max-w-2xl mx-auto w-full">
				<p className="text-sm text-[var(--color-text-dim)] mb-12 tracking-wide uppercase">
					Contact
				</p>

				<h2 className="text-3xl md:text-4xl font-medium text-[var(--color-text)] mb-6 leading-tight">
					Let&apos;s talk.
				</h2>

				<p className="text-base text-[var(--color-text-muted)] mb-12 leading-relaxed">
					I&apos;m open to co-op opportunities for Fall 2026 and happy to talk
					about full-stack development, QA, or anything in between. Drop a note
					below or reach me directly at{" "}
					<a
						href="mailto:marcoshblanco@gmail.com"
						className="text-[var(--color-text)] border-b border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
					>
						marcoshblanco@gmail.com
					</a>
					.
				</p>

				<form
					action="https://formspree.io/f/xzzbedba"
					method="post"
					className="space-y-6"
				>
					<div>
						<label
							htmlFor="name"
							className="block text-xs uppercase tracking-wide text-[var(--color-text-dim)] mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-md text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-xs uppercase tracking-wide text-[var(--color-text-dim)] mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-md text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="block text-xs uppercase tracking-wide text-[var(--color-text-dim)] mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							required
							className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-md text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
						></textarea>
					</div>

					<button
						type="submit"
						className="px-6 py-3 border border-[var(--color-accent)] rounded-md text-[var(--color-accent)] font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors"
					>
						Send message
					</button>
				</form>
			</div>
		</section>
	);
}
