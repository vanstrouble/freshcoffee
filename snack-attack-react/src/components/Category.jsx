import PropTypes from 'prop-types';

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
    );
}

Category.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};
