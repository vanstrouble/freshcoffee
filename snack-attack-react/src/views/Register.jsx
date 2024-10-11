export default function Register() {
    return (
        <>
            <h1 className="text-4xl font-black">Create your accout</h1>

            <p>Create your account by filling out the form below</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="#">
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
                        />
                    </div>

                    <input
                        type="submit"
                        value={"Create Account"}
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md"
                    />

                </form>
            </div>
        </>
    )
}
