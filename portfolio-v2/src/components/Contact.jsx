export default function Contact() {
	return (
		<section id="contact" className="py-16 px-4 bg-gray-900">
			<div className="max-w-lg mx-auto">
				<h2 className="text-3xl font-bold text-center text-white mb-8">
					Contact Me
				</h2>
				<form
					action="https://formspree.io/f/xzzbedba"
					method="post"
					className="space-y-6"
				>
					<div>
						<label
							htmlFor="name"
							className="block mb-2 text-sm font-medium text-gray-200"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-200"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="block mb-2 text-sm font-medium text-gray-200"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="6"
							required
							className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full flex justify-center px-6 py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700 active:scale-95 transition"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
