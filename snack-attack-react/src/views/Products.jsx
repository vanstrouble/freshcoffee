import useSWR from "swr";
import axiosInstance from "../config/axios";
import Product from "../components/Product";

export default function Products() {
	const token = localStorage.getItem("AUTH_TOKEN");
	const fetcher = () =>
		axiosInstance("api/products", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => res.data);

	const { data, error, isLoading } = useSWR("/api/products", fetcher, {
		refreshInterval: 10000,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading orders</p>;

	console.log(data.data);

	return (
		<div>
			<h1 className="text-4xl font-black">Products</h1>
			<p className="text-2xl my-10">
				Manage product availability from here
			</p>

			<div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
				{data.data.map((product) => (
					<div key={product.image} className="max-w-xs mx-auto">
						<Product product={product} aviableButton={true}/>
					</div>
				))}
			</div>
		</div>
	);
}
