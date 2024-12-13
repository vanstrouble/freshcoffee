import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import axiosInstance from "../config/axios";

export const useAuth = ({ middleware, url }) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    const navigate = useNavigate();

    const {
        data: user,
        error,
        mutate,
    } = useSWR("/api/user", async () =>
        axiosInstance("/api/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.data)
            .catch((error) => {
                throw Error(error?.response?.data?.errors);
            })
    );

    const login = async (info, setErrors) => {
        try {
            const { data } = await axiosInstance.post("/api/login", info);
            localStorage.setItem("AUTH_TOKEN", data.token);
            setErrors([]);
            await mutate();
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.errors
            ) {
                setErrors(Object.values(error.response.data.errors));
            } else {
                console.error("Unexpected error:", error);
                setErrors([
                    "An unexpected error occurred. Please try again later.",
                ]);
            }
        }
    };

    const logout = async () => {
        if (!error) {
            await axiosInstance.post("/api/logout", null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(() => {
                    mutate(undefined);
                    localStorage.removeItem("AUTH_TOKEN");
                })
                .catch(console.log);
        }
        window.location.pathname = "/auth/login";
    };

    const register = async (info, setErrors) => {
        try {
            const { data } = await axiosInstance.post('/api/register', info);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([]);
            await mutate();
        } catch (error) {
            setErrors(Object.values(error.response.data.errors));
        }
    };

    useEffect(() => {
        if (user && middleware === "guest" && url) {
            navigate(url);
        }
        if (middleware === 'guest' && user && user.admin) {
            navigate('/admin');
        }
        if (middleware === 'admin' && user && !user.admin) {
            navigate('/');
        }
        if (middleware === "auth" && error) {
            logout();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, error]);

    return {
        login,
        logout,
        register,
        user,
        error,
    };
};
