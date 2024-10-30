import useKiosk from "../hooks/useKiosk"
import SummaryProduct from "./SummaryProduct";
import { formatPrice } from '../helpers';


export default function Summary() {

    const { cart, total, handleSubmitNewOrder } = useKiosk();

    const checkCart = () => cart.length === 0;

    const handleSubmit = e => {
        e.preventDefault();

        handleSubmitNewOrder();

        // if (checkCart()) return;

        // alert('Checkout completed successfully');
    };

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
                Total: {formatPrice(total)}
            </p>

            <form action="#" className="w-full" onSubmit={handleSubmit}>
                <div className="mt-5">
                    <input
                        type="submit"
                        className={`${checkCart() ? 'bg-green-100' : 'bg-green-600 hover:bg-green-900'} text-white w-full p-3 uppercase font-bold rounded-md cursor-pointer`}
                        value="Checkout"
                        disabled={checkCart()}
                    />
                </div>
            </form>
        </aside>
    )
}
