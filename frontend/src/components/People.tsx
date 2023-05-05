import { useQuery, useMutation } from "@tanstack/react-query";
import { axios } from "src/api/axios";
import { queryClient } from "src/lib/react-query";

// /posts -> ["posts"]
// /posts -> ["posts", post.id]
// /posts?authorId=1 -> ["posts", { authorId: 1 }]
// /posts/2/comments -> ["posts", post.id, "comments"]

const People = () => {
	// move to API

	// get
	const getPlanets = () => {
		return axios.get("/posts");
	};

	const usePlanets = () => {
		return useQuery({
			queryKey: ["planets"],
			queryFn: getPlanets,
		});
	};

	// post
	const createPlanets = data => {
		return axios.post("/posts", data);
	};

	const useCreatePlanets = () => {
		return useMutation({
			// onMutate
			// onError
			onSuccess: () => {
				// @ts-ignore
				queryClient.invalidateQueries("planets");
			},
			mutationFn: createPlanets,
		});
	};

	const planetsQuery = usePlanets();

	const createPlanetsMutation = useCreatePlanets();

	console.log(planetsQuery.data);

	const handleCreate = () => {
		createPlanetsMutation.mutate({
			userId: 1,
		});
	};

	// if (planetsQuery.isLoading) return "Loading...";

	// if (planetsQuery.error) return "An error has occurred";

	if (planetsQuery.isSuccess) {
		return (
			// <div>
			// 	{planetsQuery.data.data.results.map(planet => (
			// 		<div key={planet.name}>{planet.name}</div>
			// 	))}
			// </div>
			<button onClick={handleCreate}>Hello</button>
		);
	}
};

export default People;
