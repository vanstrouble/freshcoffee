import { categories } from "../data/categories"

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
                    <p key={category.id}>{category.name}</p>
                ))}
            </div>
        </aside>
    )
}
