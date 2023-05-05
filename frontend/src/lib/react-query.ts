import { QueryClient, DefaultOptions } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
	queries: {
		useErrorBoundary: true,
		refetchOnWindowFocus: false,
	},
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
