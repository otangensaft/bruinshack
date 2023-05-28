import { useCreateApartments } from "@/api/apartments/createApartments";

const createPlanetsMutation = useCreateApartments();

const handleCreateApartments = async () => {
	await createPlanetsMutation.mutateAsync({
		name: "New Planet",
	});
};
