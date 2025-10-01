import githubLogo from "../assets/github64px.png";
import linkedinLogo from "../assets/linkedin64px.png";

export default function Header() {
	return (
		<header className="flex flex-col">
			<div>
				<ul className="flex w-26">
					<li className="m-2">
						<a href="https://github.com/MarcosHBlanco" target="_blank">
							<img src={githubLogo} loading="lazy" alt="Github logo" />
						</a>
					</li>
					<li className="m-2">
						<a href="https://www.linkedin.com/in/marcoshblanco/">
							<img src={linkedinLogo} loading="lazy" alt="Linkedin logo" />
						</a>
					</li>
				</ul>
			</div>
			<h1 className="text-cyan-300 justify-around">Marcos Blanco</h1>
		</header>
	);
}
