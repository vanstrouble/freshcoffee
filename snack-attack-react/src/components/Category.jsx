export default function Category({category}) {

    const { id, icon, name } = category

    return (
        <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
            <img
                src={`/img/icon_${icon}.svg`}
                alt="Icon image"
                className="w-12"
            />

            <p className="text-lg font-bold cursor-pointer truncate">{name}</p>

        </div>
    )
}
