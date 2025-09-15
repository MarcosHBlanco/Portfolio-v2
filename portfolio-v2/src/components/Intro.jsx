import workStation from "../assets/workStation.png";

export default function Intro() {
	return (
		<section id="intro" className="text-center">
			<h1 className="text-5xl font-bold mb-4 text-indigo-500">
				Hi, I'm Marcos
			</h1>
			<p className="text-lg opacity-80">
				As an orthodontist I used to fix smiles. Now, as a Software Developer
				student, I build apps. With the same precision,{" "}
				<span className="text-indigo-500">
					I like keeping things creative and fun!
				</span>
			</p>
			<div className="mt-6">
				<img className="p-10" src={workStation}></img>
			</div>
		</section>
	);
}
