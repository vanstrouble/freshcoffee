import useSWR from "swr";
import useKiosk from '../hooks/useKiosk';
import axiosInstance from "../config/axios";
import { formatPrice } from "../helpers";

export default function Orders() {
	const token = localStorage.getItem("AUTH_TOKEN");
	const fetcher = () =>
		axiosInstance("/api/orders", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

	const { data, error, isLoading } = useSWR("/api/orders", fetcher, {refreshInterval: 1000});
	const { handleClickCompleteOrder } = useKiosk();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading orders</p>;

	return (
		<div>
			<h1 className="text-4xl font-black">Orders</h1>
			<p className="text-2xl my-10">Manage the orders from here</p>

			<div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
				{data.data.data.map((order) => (
					<div key={order.id} className="border p-5 my-4 flex flex-col justify-between bg-white shadow space-y-2 border-b">
						<div>
							<p className="text-xl font-bold text-slate-600">
								Order Content
							</p>
							{order.products.map((product) => (
								<div
									key={product.id}
									className="border-b border-b-slate-200 last-of-type:border-none py-2"
								>
									<p>ID: {product.id}</p>
									<p>Name: {product.name}</p>
									<p>
										Quantity:{" "}
										<span className="font-bold">
											{product.pivot.quantity}
										</span>
									</p>
									<p>Price: {product.price}</p>
								</div>
							))}
						</div>
						<div>
							<p className="text-lg font-bold text-slate-600">
								Customer:{" "}
								<span className="font-normal">
									{order.user.name}
								</span>
							</p>
							<p className="text-2xl font-bold text-amber-600">
								Total:{" "}
								<span className="text-green-600 text-2xl">
									{formatPrice(order.total)}
								</span>
							</p>
							<button
								type="button"
								className="bg-indigo-600 hover:bg-indigo-900 text-white w-full p-3 uppercase font-bold rounded-md cursor-pointer mt-4"
								value="Checkout"
								// disabled={checkCart()}
								onClick={() => handleClickCompleteOrder(order.id)}
							>
								Complete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
