import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactModal from "react-modal";
import Sidebar from "../components/Sidebar";
import Summary from "../components/Summary";
import useKiosk from "../hooks/useKiosk";
import ModalProduct from "../components/ModalProduct";
import { useAuth } from "../hooks/useAuth";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

ReactModal.setAppElement("#root");

export default function Layout() {
	useAuth({
		middleware: "auth",
	});

	const { modal } = useKiosk();

	return (
		<>
			<div className="md:flex">
				<Sidebar />

				<main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
					<Outlet />
				</main>

				<Summary />
			</div>

			<ReactModal isOpen={modal} style={customStyles}>
				<ModalProduct></ModalProduct>
			</ReactModal>

			<ToastContainer />
		</>
	);
}
