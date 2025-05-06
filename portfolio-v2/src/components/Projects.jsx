import { PROJECTS } from "../projects";

export default function Projects() {
	return (
		<section id="projects" className="py-16 px-4 bg-gray-800 rounded-lg mb-8">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-8 text-indigo-300">
					Projects
				</h2>
				<div className="space-y-8">
					{PROJECTS.map((project, idx) => (
						<div
							key={idx}
							className="bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 grid md:grid-cols-12 gap-6 transition transform hover:scale-105"
						>
							<div className="md:col-span-5 aspect-video overflow-hidden rounded">
								<img
									src={project.image}
									alt={project.title}
									className="object-cover w-full h-full"
								/>
							</div>
							<div className="md:col-span-7 flex flex-col justify-between">
								<div>
									<h3 className="text-2xl font-semibold mb-2 text-indigo-300">
										{project.title}
									</h3>
									<p className="mb-4 opacity-80 break-words">
										{project.description}
									</p>
								</div>
								<div className="flex flex-wrap gap-4">
									<a
										href={project.github}
										className="px-4 py-2 border border-indigo-500 rounded-full hover:bg-indigo-500 transition font-medium"
									>
										Code
									</a>
									{project.itchio && (
										<a
											href={project.itchio}
											className="px-4 py-2 border border-indigo-500 rounded-full hover:bg-indigo-500 transition font-medium"
										>
											Live
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
