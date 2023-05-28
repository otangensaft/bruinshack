import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";

export default function App({ Component, pageProps }) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</QueryClientProvider>
	);
}
