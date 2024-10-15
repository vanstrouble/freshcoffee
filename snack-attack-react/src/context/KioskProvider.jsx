import { createContext, useState } from "react"
import PropTypes from 'prop-types';
import { categories as categoriesDB } from "../data/categories"

const KioskContext = createContext()

const KioskProvider = ({ children }) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [actualCategory, setActualCategory] = useState(categories[0]);

    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0];
        setActualCategory(category);
    }

    return (
        <KioskContext.Provider
            value={{
                categories,
                actualCategory,
                handleClickCategory
            }}>
                {children}
        </KioskContext.Provider>
    )
}
KioskProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { KioskProvider }
export default KioskContext
