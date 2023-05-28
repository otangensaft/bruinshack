import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import bruinShack from "../../../public/bruinShack.png";

const ApartmentDetails = () => {
	const router = useRouter();
	const { id } = router.query;

	// Replace this with your logic to fetch apartment details
	const apartmentDetails = {
		id: id,
		price: "$2000",
		availability: "Available Now",
		capacity: "2 bedrooms",
		walkingDistance: "10 minutes",
		floorPlans: [
			"Studio",
			"1 bed + 1 bath",
			"2 bed + 1 bath",
			"2 bed + 2 bath",
		],
		unitAvailability: [
			{ unitNumber: "Unit 101", available: true },
			{ unitNumber: "Unit 102", available: false },
			{ unitNumber: "Unit 103", available: true },
		],
		amenities: ["Swimming Pool", "Fitness Center", "Parking"],
	};

	const [selectedFloorPlan, setSelectedFloorPlan] = useState(
		apartmentDetails.floorPlans[0],
	);

	const handleFloorPlanToggle = floorPlan => {
		setSelectedFloorPlan(floorPlan);
	};

	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-3 grid-rows-2 gap-0">
				{[...Array(6)].map((_, index) => (
					<div key={index}>
						<Image src={bruinShack} alt={`Collage ${index + 1}`} />
					</div>
				))}
			</div>
			<div className="flex">
				<div className="w-1/2 p-4">
					<div>
						<h1 className="text-3xl font-bold mb-4">
							Apartment Details for ID: {apartmentDetails.id}
						</h1>
						<p className="text-lg mb-2">
							Price:{" "}
							<span className="font-bold">
								{apartmentDetails.price}
							</span>
						</p>
						<p className="text-lg mb-2">
							Availability:{" "}
							<span className="font-bold">
								{apartmentDetails.availability}
							</span>
						</p>
						<p className="text-lg mb-2">
							Capacity:{" "}
							<span className="font-bold">
								{apartmentDetails.capacity}
							</span>
						</p>
						<p className="text-lg">
							Walking Distance to UCLA:{" "}
							<span className="font-bold">
								{apartmentDetails.walkingDistance}
							</span>
						</p>
						<div className="mt-6">
							<h2 className="text-xl font-bold mb-2">
								Floor Plans
							</h2>
							<div className="flex space-x-4">
								{apartmentDetails.floorPlans.map(floorPlan => (
									<button
										key={floorPlan}
										className={`px-4 py-2 rounded ${
											selectedFloorPlan === floorPlan
												? "bg-primary text-white"
												: "bg-gray-300"
										}`}
										onClick={() =>
											handleFloorPlanToggle(floorPlan)
										}
									>
										{floorPlan}
									</button>
								))}
							</div>
						</div>
						<div className="mt-6">
							<h2 className="text-xl font-bold mb-2">
								Unit Availability
							</h2>
							{apartmentDetails.unitAvailability.map(unit => (
								<div
									key={unit.unitNumber}
									className={`flex items-center mb-2 ${
										unit.available
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									<p>{unit.unitNumber}</p>
									<span className="ml-2">
										{unit.available
											? "Available"
											: "Not Available"}
									</span>
								</div>
							))}
						</div>
						<div className="mt-6">
							<h2 className="text-xl font-bold mb-2">
								Amenities
							</h2>
							<div className="flex space-x-2">
								{apartmentDetails.amenities.map(amenity => (
									<div
										key={amenity}
										className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full"
									>
										{amenity}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="w-1/2 p-4">
					<div id="map" className="h-96 bg-gray-300">
						MAP
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApartmentDetails;
