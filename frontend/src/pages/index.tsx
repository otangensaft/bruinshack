import ApartmentsList from "@/components/apartments/ApartmentsList";
import ImageSlider from "@/components/main/ImageSlider";
import Image from "next/image";
import bruinShack from "../../public/bruinShack.png";

const Home = () => {
	return (
		<>
			<div className="relative h-screen">
				<Image
					className="absolute inset-0 w-full h-full object-cover"
					src={bruinShack}
					alt="UCLA"
					layout="fill"
				/>
				<div className="absolute inset-0 flex flex-col items-start justify-center text-left ml-20">
					<h1 className="text-5xl font-bold text-white mb-4">
						Bruinshack
					</h1>
					<h2 className="text-2xl text-white mb-8">
						UCLA Apartment Search, Made Easy
					</h2>
					<div className="flex space-x-4">
						<button className="bg-primary text-white py-2 px-4 rounded">
							I want to lease
						</button>
						<button className="bg-primary text-white py-2 px-4 rounded">
							I want to sublet
						</button>
					</div>
				</div>
			</div>
			<div className="my-20">
				<ImageSlider />
			</div>
		</>
	);
};

export default Home;
