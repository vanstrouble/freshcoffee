import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify";
import axios from 'axios';

const KioskContext = createContext()

const KioskProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [actualCategory, setActualCategory] = useState({});
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setTotal(total);
    }, [cart]);

    const fetchCategories = async () => {
        try {
            const {data} = await axios.get('http://127.0.0.1:8000/api/categories');
            setCategories(data.data);
            setActualCategory(data.data[0]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

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
                handleRemoveCart,
                total,
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
