import Link from "next/link";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-between bg-primary py-4 px-6">
			<div className="text-white text-xl">BRUINSHACK</div>
			<ul className="flex items-center">
				<li className="text-white mx-4 hover:text-gray-300">
					<Link href="#">About</Link>
				</li>
				<li className="text-white mx-4 hover:text-gray-300">
					<Link href="#">Contact</Link>
				</li>
				<li>
					<Link
						href="#"
						className="text-white mx-4 hover:text-gray-300"
					>
						Opportunities
					</Link>
				</li>
				<li>
					<Link href="#" className="mx-4 hover:text-gray-300">
						<div
							style={{ backgroundColor: "#F6DA93" }}
							className="rounded-full p-2 inline-flex items-center w-auto"
						>
							<span className="text-black">List Your Apt</span>
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
