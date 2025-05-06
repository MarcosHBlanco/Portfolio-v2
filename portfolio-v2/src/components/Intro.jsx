import workStation from "../assets/workStation.png";

export default function Intro() {
	return (
		<section id="intro" className="text-center">
			<h1 className="text-5xl font-bold mb-4 text-indigo-300">
				Hi, I'm Marcos
			</h1>
			<p className="text-lg opacity-80">
				Former orthodontist turned software developer. I blend precision,
				empathy, and creativity to craft elegant code and experiences.{" "}
				<span className="text-indigo-300">While having fun!</span>
			</p>
			<div className="mt-6">
				<img className="p-10" src={workStation}></img>
			</div>
		</section>
	);
}
