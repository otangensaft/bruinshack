import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

// get
const getApartments = () => {
	return axios.get("/apartments");
};

export const useApartments = () => {
	return useQuery({
		queryKey: ["apartments"],
		queryFn: getApartments,
	});
};
