export default function Menu() {
	const items = [
		{ label: "About", href: "#about" },
		{ label: "Projects", href: "#projects" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<nav className="fixed top-0 left-0 w-full bg-indigo-900 bg-opacity-90 backdrop-blur-sm z-10">
			<ul className="container mx-auto flex justify-center space-x-8 py-4">
				{items.map((item) => (
					<li
						key={item.href}
						className="transition hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						<a href={item.href} className="text-lg font-medium">
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
