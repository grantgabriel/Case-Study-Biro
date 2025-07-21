import React from "react";

const LoginForm = () => {
    return (
        <div className="flex justify-center items-center bg-background-gray-usu px-5 sm:px-0 w-full h-screen">
            <div className="flex bg-white shadow-lg border rounded-lg w-full max-w-xl lg:max-w-5xl overflow-hidden">
                <div className="p-8 w-full">
                    <p className="text-gray-600 text-xl text-center">Welcome back!</p>
                    <div className="mt-4">
                        <label className="block mb-2 font-bold text-gray-700 text-sm">
                            Email Address
                        </label>
                        <input
                            className="block px-4 py-2 border border-gray-300 rounded focus:outline-2 focus:outline-blue-700 w-full text-gray-700"
                            type="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-between mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 font-bold text-gray-700 text-sm">
                                Password
                            </label>
                        </div>
                        <input
                            className="block px-4 py-2 border border-gray-300 rounded focus:outline-2 focus:outline-blue-700 w-full text-gray-700"
                            type="password"
                        />
                        <a
                            href="#"
                            className="mt-2 w-full text-gray-500 hover:text-gray-900 text-xs text-end"
                        >
                            Forget Password?
                        </a>
                    </div>
                    <div className="mt-8">
                        <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded w-full font-bold text-white">
                            Login
                        </button>
                    </div>
                    <a
                        href="#"
                        className="flex justify-center items-center hover:bg-gray-100 shadow-md mt-4 rounded-lg text-white"
                    >
                        <div className="flex justify-center px-5 py-3 w-full">
                            <div className="min-w-[30px]">
                                <svg className="w-6 h-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>
                            <div className="flex justify-center w-full">
                                <h1 className="font-bold text-gray-600 whitespace-nowrap">
                                    Sign in with Google
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
