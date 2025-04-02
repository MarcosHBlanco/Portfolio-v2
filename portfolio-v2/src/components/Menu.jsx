export default function Menu() {
	return (
		<div>
			<ul className="mt-20">
				<li
					tabIndex={0}
					className="text-2xl m-1 p-2 opacity-80 hover:opacity-100 hover:text-cyan-300 hover:scale-110 hover:translate-x-3 transition"
				>
					<a href="#about">About</a>
				</li>
				<li className="text-2xl m-1 p-2 opacity-80 hover:opacity-100 hover:text-cyan-300 hover:scale-110 hover:translate-x-3 transition">
					<a href="#projects">Projects</a>
				</li>
				<li className="text-2xl m-1 p-2 opacity-80 hover:opacity-100 hover:text-cyan-300 hover:scale-110 hover:translate-x-3 transition">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
}
