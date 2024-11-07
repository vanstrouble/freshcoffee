import Product from "../components/Product";
import axiosInstance from "../config/axios";
import useKiosk from "../hooks/useKiosk";
import useSWR from "swr";

export default function Home() {
	const { actualCategory } = useKiosk();

	const token = localStorage.getItem("AUTH_TOKEN");
	const fetcher = () =>
		axiosInstance("api/products", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((data) => data.data);

	const { data, error, isLoading } = useSWR("/api/products", fetcher, {
		refreshInterval: 1000,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading products</p>;

	const products = data.data.filter(
		(product) => product.category_id === actualCategory.id
	);

	return (
		<>
			<div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
				{products.map((product) => (
					<div key={product.image} className="max-w-xs mx-auto">
						<Product product={product} addButton={true}/>
					</div>
				))}
			</div>
		</>
	);
}
