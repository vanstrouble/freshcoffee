import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import axiosInstance from "../config/axios"
import Alert from "../components/Alert";

export default function Register() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const info = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        try {
            const {data} = await axiosInstance.post('/api/register', info);
            console.log(data.token);
        } catch (error) {
            setErrors(Object.values(error.response.data.errors));
        }
    }

    return (
        <>
            <h1 className="text-4xl font-black">Create your accout</h1>

            <p>Create your account by filling out the form below</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="#" onSubmit={handleSubmit} noValidate>
                    {errors ? errors.map((error, index) => <Alert key={index}>{error}</Alert>) : null}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="text-slate-800"
                            >
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Enter your name"
                            ref={nameRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="text-slate-800"
                            >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Enter your email"
                            ref={emailRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="text-slate-800"
                            >
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Enter your password"
                            ref={passwordRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password_confirmation"
                            className="text-slate-800"
                            >
                            Repeat Password:
                        </label>
                        <input
                            type="password"
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirmation"
                            placeholder="Enter your password again"
                            ref={passwordConfirmationRef}
                        />
                    </div>

                    <input
                        type="submit"
                        value={"Create Account"}
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md"
                    />

                </form>
            </div>

            <nav className="mt-5">
                <Link to="/auth/login">
                    Already have an account? Login here
                </Link>
            </nav>
        </>
    )
}
