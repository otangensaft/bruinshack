import { axios } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

const createApartments = data => {
	return axios.post("/apartment", data);
};

export const useCreateApartments = () => {
	return useMutation({
		onMutate: async newApartment => {
			// @ts-ignore
			await queryClient.cancelQueries("apartments");

			// @ts-ignore
			const previousApartments = queryClient.getQueryData("apartments");

			// @ts-ignore
			queryClient.setQueryData("apartments", [
				// @ts-ignore
				...(previousApartments || []),
				newApartment.data,
			]);

			// @ts-ignore
			return { previousApartments };
		},
		onError: (_, __, context) => {
			if (context.previousApartments) {
				queryClient.setQueryData(
					// @ts-ignore
					"apartments",
					context.previousApartments,
				);
			}
		},
		onSettled: () => {
			// @ts-ignore
			queryClient.invalidateQueries({ queryKey: ["apartments"] });
		},
		mutationFn: createApartments,
	});
};
