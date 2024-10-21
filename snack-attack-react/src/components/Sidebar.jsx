import { categories } from "../data/categories"
import Category from "./Category"

export default function Sidebar() {
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
                        category={category}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate rounded-md"
                >
                    Order cancellation
                </button>
            </div>
        </aside>
    )
}
