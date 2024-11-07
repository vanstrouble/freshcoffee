import { formatPrice } from "../helpers";
import PropTypes from "prop-types";
import useKiosk from "../hooks/useKiosk";

export default function Product({
	product,
	addButton = false,
	aviableButton = false,
}) {
	const { image, name, price } = product;
	const { handleClickModal, handleSetProduct } = useKiosk();

	return (
		<div className="border p-3 shadow bg-white rounded-sm flex flex-col justify-between h-full">
			<img
				src={`/img/${image}.jpg`}
				alt={`${name} image`}
				className="w-full"
			/>

			<div className="p-5 flex flex-col flex-grow justify-between">
				<h3 className="text-3xl font-bold">{name}</h3>

				<div className="mt-5">
					<p className="font-black text-4xl text-amber-500">
						{formatPrice(price)}
					</p>

					{addButton && (
						<button
							className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md"
							onClick={() => {
								handleClickModal();
								handleSetProduct(product);
                            }}
                        >
                            Add to cart
                        </button>
                    )}
                    {aviableButton && (
                        <button
                            className="bg-red-600 hover:bg-red-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md"
                            onClick={() => {
								handleClickModal();
								handleSetProduct(product);
							}}
						>
							Product Out of Stock
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

Product.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
	addButton: PropTypes.bool,
	aviableButton: PropTypes.bool,
};
