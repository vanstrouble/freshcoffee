import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify";
import axiosInstance from '../config/axios';

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
        const token = localStorage.getItem("AUTH_TOKEN")

        try {
            const {data} = await axiosInstance('/api/categories', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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

    // eslint-disable-next-line no-unused-vars
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

    const handleSubmitNewOrder = async (logout) => {
        const token = localStorage.getItem("AUTH_TOKEN");

        try {
            const { data } =  await axiosInstance.post('/api/orders', {
                total,
                products: cart.map(product => {
                    return {
                        id: product.id,
                        quantity: product.quantity,
                    }
                })
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success(data.message);
            setTimeout(() => {
                setCart([]);
            }, 1000);

            setTimeout(() => {
                logout();
                localStorage.removeItem("AUTH_TOKEN");
            }, 3000);
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while trying to complete the order');
        }
    }

    const handleClickCompleteOrder = async id => {
        const token = localStorage.getItem("AUTH_TOKEN");
        try {
            await axiosInstance.put(`/api/orders/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleClickProductOutOfStock = async id => {
        const token = localStorage.getItem("AUTH_TOKEN");
        try {
            await axiosInstance.put(`/api/products/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        } catch (error) {
            console.error(error);
        }
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
                handleSubmitNewOrder,
                handleClickCompleteOrder,
                handleClickProductOutOfStock
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
