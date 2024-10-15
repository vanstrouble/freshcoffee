import useKiosk from "../hooks/useKiosk"
import { formatPrice } from "../helpers";

export default function ModalProduct() {

    const { product, handleClickModal } = useKiosk();
    console.log(product)

    return (
        <div className="md:flex gap-10 rounded">
            <div className="md:w-1/3">
                <img
                    src={`/img/${product.image}.jpg`}
                    alt={`Image product ${product.name}`}
                />
            </div>

            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>
                </div>

                <h1 className="text-3xl font-bold mt-5">
                    {product.name}
                </h1>

                <p className="mt-5 font-black text-5xl text-amber-500">
                    {formatPrice(product.price)}
                </p>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md">
                    Add to order
                </button>
            </div>
        </div>
    )
}
