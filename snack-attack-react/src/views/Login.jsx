import { Link } from "react-router-dom"

export default function Login() {
    return (
        <>
            <h1 className="text-4xl font-black">Login</h1>

            <p>To create an order you must be logged in</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="#">

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
