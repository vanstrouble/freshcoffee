import axiosInstance from "../config/axios";

export const useAuth = ({middleware, url}) => {

    const login = async (info, setErrors) => {
        try {
            const { data } = await axiosInstance.post('/api/login', info);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([]);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(Object.values(error.response.data.errors));
            } else {
                console.error("Unexpected error:", error);
                setErrors(["An unexpected error occurred. Please try again later."]);
            }
        }
    }

    const logout = () => {
        // logout logic
    }

    const register = () => {
        // register logic
    }

    return {
        login,
        logout,
        register
    }
}
