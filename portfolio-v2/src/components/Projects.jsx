import { PROJECTS } from "../projects";
export default function Projects() {
	return (
		<section
			id="projects"
			className="text-white flex flex-col items-center p-5"
		>
			<h2 className="text-4xl mb-16 ">Projects</h2>
			{PROJECTS.map((project, index) => (
				<div key={index}>
					<h2 className="text-2xl">{project.title}</h2>
					<div className="w-full rounded grid grid-cols-12 opacity-75 hover:scale-105 hover:bg-slate-800 hover:opacity-100 m-2 transition">
						<div className="w- full col-span-5">
							<img
								className="w-full h-44"
								src={project.image}
								alt="Image of FireShip Unity 2D game"
							/>
						</div>
						<div className="col-span-7 w-full flex flex-col justify-center m-2">
							<p className="my-2 w-full pe-5 break-all">
								{project.description}
							</p>
							<ul className="flex flex-wrap">
								<a
									href={project.github}
									className="m-1 p-2 border-2 border-cyan-500 rounded-2xl hover:bg-sky-500 hover:scale-110 transition "
								>
									<p className="">Github</p>
								</a>

								<a
									href={project.itchio}
									className=" m-1 p-2 border-2 border-cyan-500 rounded-2xl hover:bg-sky-500 hover:scale-110 active:bg-amber-200 transition "
								>
									<p>Visit</p>
								</a>
							</ul>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
