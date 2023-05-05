// @ts-ignore
import { useQuery } from "@tanstack/react-query";
import { axios } from "src/api/axios";

// /posts -> ["posts"]
// /posts -> ["posts", post.id]
// /posts?authorId=1 -> ["posts", { authorId: 1 }]
// /posts/2/comments -> ["posts", post.id, "comments"]

const People = () => {
	// move to API
	const getPlanets = () => {
		return axios.get("/planets");
	};

	const usePlanets = () => {
		return useQuery({
			queryKey: ["planets"],
			queryFn: () => getPlanets(),
		});
	};

	const planetsQuery = usePlanets();

	if (planetsQuery.isLoading) return "Loading...";

	if (planetsQuery.error) return "An error has occurred";

	if (planetsQuery.data.data) {
		return (
			<div>
				{planetsQuery.data.data.results.map(planet => (
					<div key={planet.name}>{planet.name}</div>
				))}
			</div>
		);
	}
};

export default People;
