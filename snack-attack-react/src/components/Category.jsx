import PropTypes from 'prop-types';
import useKiosk from '../hooks/useKiosk';

export default function Category({ category }) {

    const { handleClickCategory, actualCategory } = useKiosk();
    const { id, icon, name } = category

    return (
        <div
            className={`${actualCategory.id === id ? "bg-amber-400" : 'bg-white'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
            onClick={() => handleClickCategory(id)}
        >
            <img
                src={`/img/icon_${icon}.svg`}
                alt="Icon image"
                className="w-12"
            />

            <span className="text-lg font-bold truncate">
                {name}
            </span>
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
