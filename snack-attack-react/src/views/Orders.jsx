import useSWR from "swr";
import axiosInstance from "../config/axios";

export default function Orders() {
	const token = localStorage.getItem("AUTH_TOKEN");
	const fetcher = () =>
		axiosInstance("/api/orders", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

	const { data, error, isLoading } = useSWR("/api/orders", fetcher);

	console.log(data?.data, error, isLoading);

	return (
		<div>
			<h1 className="text-4xl font-black">Ordens</h1>
			<p className="text-2xl my-10">Manage the orders from here</p>
		</div>
	);
}
