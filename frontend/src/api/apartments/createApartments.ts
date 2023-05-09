import { axios } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

const createApartments = data => {
	return axios.post("/planets", data);
};

export const useCreateApartments = () => {
	return useMutation({
		mutationFn: createApartments,
		onSuccess: () => {
			// @ts-ignore
			queryClient.invalidateQueries({ queryKey: ["planets"] });
		},
	});
};
