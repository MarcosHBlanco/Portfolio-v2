import workStation from "../assets/workStation.png";

export default function Intro() {
	return (
		<div>
			<section id="intro" className="text-center">
				<h1 className="text-5xl font-bold mb-4 text-indigo-500">
					Hi, I'm Marcos
				</h1>
				<p className="text-lg opacity-80">
					As an orthodontist I used to fix smiles. Now, as a Software Developer
					student, I build apps. With the same precision,{" "}
					<span id="rainbowText" className="text-indigo-500">
						I like keeping things creative and fun!
					</span>
				</p>
				<div className="mt-6">
					<img className="p-10" src={workStation}></img>
				</div>
			</section>
			<section id="links">
				<nav>
					<ul className="linksul">
						<li className="lilinks">
							<a href=""></a>
						</li>
						<li className="lilinks">
							<a href=""></a>
						</li>
					</ul>
				</nav>
			</section>
		</div>
	);
}
