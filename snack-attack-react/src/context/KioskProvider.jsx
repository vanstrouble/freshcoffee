import PropTypes from 'prop-types';
import { createContext, useState } from "react"
import { toast } from "react-toastify";
import { categories as categoriesDB } from "../data/categories"

const KioskContext = createContext()

const KioskProvider = ({ children }) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [actualCategory, setActualCategory] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState([]);

    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0];
        setActualCategory(category);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProduct = product => {
        setProduct(product);
    }

    const handleAddToCart = ({ category_id, ...product }) => {
        if (cart.some(cartState => cartState.id === product.id)) {
            const updatedCart = cart.map(cartState => cartState.id === product.id ? product : cartState);
            setCart(updatedCart);
            toast.success(`${product.name} updated successfully`);
        } else {
            setCart([...cart, product]);
            toast.success(`${product.name} added to cart`);
        }
    }

    const handleUpdateCart = id => {
        const updatedProduct = cart.filter(product => product.id === id)[0];
        setProduct(updatedProduct);
        setModal(!modal);
    }

    const handleRemoveCart = id => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);
        toast.error('Product removed from cart');
    }

    return (
        <KioskContext.Provider
            value={{
                categories,
                actualCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                cart,
                handleAddToCart,
                handleUpdateCart,
                handleRemoveCart
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
