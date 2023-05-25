import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

// get
const getApartment = id => {
	return axios.get(`/apartments/${id}`);
};

export const useApartment = id => {
	return useQuery({
		queryKey: ["apartments", id],
		queryFn: getApartment,
	});
};
