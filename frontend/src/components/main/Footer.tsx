import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-primary text-gray-300">
			<div className="flex justify-between items-center py-6">
				<div className="flex space-x-4 text-white">
					<Link href="/about">About</Link>
					<Link href="/contact">Contact Us</Link>
					<Link href="/opportunities">Opportunities</Link>
					<Link href="/listings">List Your Apt</Link>
				</div>
				<div className="flex space-x-4 text-white">
					<Link href="">Facebook</Link>
					<Link href="">Instagram</Link>
					<Link href="">Twitter</Link>
					<Link href="">LinkedIn</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
