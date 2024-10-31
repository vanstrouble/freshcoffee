import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminSidebar() {
    const { logout } = useAuth({middleware: 'auth'});

	return (
		<aside className="md:w-72 h-screen">
			<div className="p-4">
				<img src="/img/logo.svg" alt="Logo image" className="w-40" />
			</div>

			<nav className="flex flex-col p-4">
				<Link to="/admin" className="font-bold text-lg">
					Orders
				</Link>
				<Link to="/admin/products" className="font-bold text-lg">
					Products
				</Link>
			</nav>

			<div className="my-5 px-5">
				<button
					type="button"
					className="text-center bg-red-500 w-full p-3 font-bold text-white truncate rounded-md"
					onClick={logout}
				>
					Logout
				</button>
			</div>
		</aside>
	);
}
