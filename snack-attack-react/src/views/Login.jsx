import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../components/Alert";
import { useAuth } from "../hooks/useAuth";

export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [errors, setErrors] = useState([]);
    const { login } = useAuth({
        middleware: "guest",
        url: "/"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const info = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        await login(info, setErrors);
    }

    return (
        <>
            <h1 className="text-4xl font-black">Login</h1>

            <p>To create an order you must be logged in</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="#" onSubmit={handleSubmit} noValidate>
                {errors ? errors.map((error, index) => <Alert key={index}>{error}</Alert>) : null}

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

                    <input
                        type="submit"
                        value={"Login"}
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md"
                    />

                </form>
            </div>

            <nav className="mt-5">
                <Link to="/auth/register">
                    Don&apos;t have an account? Create an account here
                </Link>
            </nav>
        </>
    )
}
