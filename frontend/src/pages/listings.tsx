import React, { useState } from "react";
import Image from "next/image";
import bruinShack from "../../public/bruinShack.png";

const Listings = () => {
	const apartments = [
		{
			id: 1,
			price: "$2000",
			availability: "Available Now",
			capacity: "2 bedrooms",
			walkingDistance: "10 minutes",
			latitude: 34.0709,
			longitude: -118.4464,
		},
		{
			id: 2,
			price: "$1800",
			availability: "Available Soon",
			capacity: "1 bedroom",
			walkingDistance: "5 minutes",
			latitude: 34.0689,
			longitude: -118.4452,
		},
		{
			id: 3,
			price: "$2200",
			availability: "Available Now",
			capacity: "3 bedrooms",
			walkingDistance: "15 minutes",
			latitude: 34.0715,
			longitude: -118.4482,
		},
		{
			id: 1,
			price: "$2000",
			availability: "Available Now",
			capacity: "2 bedrooms",
			walkingDistance: "10 minutes",
			latitude: 34.0709,
			longitude: -118.4464,
		},
		{
			id: 2,
			price: "$1800",
			availability: "Available Soon",
			capacity: "1 bedroom",
			walkingDistance: "5 minutes",
			latitude: 34.0689,
			longitude: -118.4452,
		},
		{
			id: 3,
			price: "$2200",
			availability: "Available Now",
			capacity: "3 bedrooms",
			walkingDistance: "15 minutes",
			latitude: 34.0715,
			longitude: -118.4482,
		},
	];

	const [isLeaseSelected, setIsLeaseSelected] = useState(true);

	const renderApartments = () => {
		return apartments.map(apartment => (
			<div
				key={apartment.id}
				className="flex mb-4 border border-blue-500 rounded p-4"
			>
				<div className="w-1/3">
					<div className="w-32 h-32 relative">
						<Image
							src={bruinShack}
							alt="Apartment"
							layout="fill"
							objectFit="cover"
							className="rounded"
						/>
					</div>
				</div>
				<div className="w-2/3 px-4">
					<div className="flex justify-between items-center mb-1">
						<p className="font-bold">Name</p>
						<div className="flex items-center">
							<p>available</p>
							<button className="ml-4 bg-primary text-white py-2 px-4 rounded">
								Save
							</button>
						</div>
					</div>
					<div className="flex items-center mb-2">
						<p className="mr-8">2bd, 2ba</p>
						<p>4-6 people</p>
					</div>
					<p>x mins to UCLA</p>
					<p>Landlord</p>
					<div className="flex justify-between">
						<p>
							<a
								href="https://example.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Website
							</a>
						</p>
						<p>1050/month</p>
					</div>
				</div>
			</div>
		));
	};

	return (
		<div className="flex overflow-hidden">
			<div className="w-1/2 overflow-y-auto h-screen">
				<div className="flex justify-between items-center mb-4 p-4 bg-gradient-to-r from-blue-200 to-blue-100 shadow-lg">
					<div className="flex items-center justify-between w-full">
						<div className="bg-gray-200 rounded-md p-2">
							<button
								className={`px-4 py-2 rounded ${
									isLeaseSelected
										? "bg-primary text-white"
										: "bg-gray-300"
								}`}
								onClick={() => setIsLeaseSelected(true)}
							>
								Lease
							</button>
							<button
								className={`px-4 py-2 rounded ${
									!isLeaseSelected
										? "bg-primary text-white"
										: "bg-gray-300"
								}`}
								onClick={() => setIsLeaseSelected(false)}
							>
								Sublet
							</button>
						</div>
						<button className="ml-4 bg-primary text-white py-2 px-4 rounded">
							Filters
						</button>
					</div>
				</div>
				<div className="p-4">{renderApartments()}</div>
			</div>
			<div className="w-1/2">
				<div id="map" className="h-96 bg-gray-300"></div>
			</div>
		</div>
	);
};

export default Listings;
