import useKiosk from "../hooks/useKiosk"
import SummaryProduct from "./SummaryProduct";

export default function Summary() {

    const { cart } = useKiosk();

    return (
        <aside className="md:w-72 h-screen overflow-y-scroll p-5">
            <h1 className="text-4xl font-black">
                My Cart
            </h1>
            <p className="text-lg my-5">
                Your order summary will be displayed here.
            </p>

            <div className="py-10">
                {cart.length === 0 ? (
                    <p className="text-center text-2xl">
                        Your cart is empty
                    </p>
                ) : (
                    cart.map(product => (
                        <SummaryProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                )}
            </div>

            <p className="text-xl mt-10">
                Total: $0.00
            </p>

            <form action="#" className="w-full">
                <div className="mt-5">
                    <input
                        type="submit"
                        className="bg-green-600 hover:bg-green-800 text-white w-full p-3 uppercase font-bold rounded-md cursor-pointer"
                        value="Checkout"
                    />
                </div>
            </form>
        </aside>
    )
}
