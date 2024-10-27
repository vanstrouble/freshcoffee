import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import axiosInstance from "../config/axios";

export const useAuth = ({middleware, url}) => {

    const token = localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate();

    const { data: user, error, mutate } = useSWR('/api/user', async () =>
        axiosInstance('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors);
        })
    )

    const login = async (info, setErrors) => {
        try {
            const { data } = await axiosInstance.post('/api/login', info);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([]);
            await mutate();
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(Object.values(error.response.data.errors));
            } else {
                console.error("Unexpected error:", error);
                setErrors(["An unexpected error occurred. Please try again later."]);
            }
        }
    }

    const logout = async () => {
        try {
            await axiosInstance.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('AUTH_TOKEN');
            await mutate(undefined);
        } catch (error) {
            throw Error(error?.response?.data?.errors);
        }
    }

    const register = () => {
        // register logic
    }

    console.log(user);
    console.log(error);

    useEffect(() => {
        if (middleware === 'guest' && user && url) {
            navigate(url);
        }
        if (middleware === 'auth' && error) {
            navigate('auth/login');
        }
    }, [user, error, middleware, navigate, url])

    return {
        login,
        logout,
        register,
        user,
        error
    }
}
