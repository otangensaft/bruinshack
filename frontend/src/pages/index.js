import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import People from "src/components/People";

const Home = () => {
	return (
		<>
			<People />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};

export default Home;
