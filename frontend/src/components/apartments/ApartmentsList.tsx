import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { useApartments } from "@/api/apartments/getApartments";
import { useCreateApartments } from "@/api/apartments/createApartments";

const ApartmentsList = () => {
	const apartmentsQuery = useApartments();

	// if (apartmentsQuery.isLoading) return "Loading...";

	// if (apartmentsQuery.error) return "An error has occurred";

	if (apartmentsQuery.isSuccess) {
		return (
			<div>
				{/* @ts-ignore */}
				{apartmentsQuery.data.map(apartment => (
					<div key={apartment.id}>{apartment.name}</div>
				))}
			</div>
		);
	}
};

export default ApartmentsList;
