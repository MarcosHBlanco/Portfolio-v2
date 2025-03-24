import WorkStation from "../assets/workstation.png";
import Header from "./Header";
import Menu from "./Menu";

export default function Intro() {
	return (
		<div className="text-white mx-14 mt-40 place-items-start border-e-2 mb-3 p-2 sticky ">
			<Header />
			<p className="text-2xl my-8">
				Out here chasing dreams, crafting{" "}
				<span className="text-cyan-500">innovative</span>
				<br />
				software and <span className="text-cyan-500">
					{" "}
					fun-filled{" "}
				</span>games, <br />
				where creativity meets code!
			</p>

			<img src={WorkStation} alt="" />
			<Menu></Menu>
		</div>
	);
}
