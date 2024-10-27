import Category from "./Category"
import useKiosk from "../hooks/useKiosk"
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {

    const { categories } = useKiosk();

    const { logout } = useAuth({
        middleware: 'auth',
    })

    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img
                    className="w-40"
                    src="img/logo.svg"
                    alt="Logo image"
                />
            </div>

            <div className="mt-10">
                {categories.map(category => (
                    <Category
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate rounded-md"
                    onClick={logout}
                >
                    Order cancellation
                </button>
            </div>
        </aside>
    )
}
