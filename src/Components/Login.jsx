import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-11/12 max-w-md p-8 space-y-4 bg-emerald-50 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
                <p className="text-sm text-center text-gray-500">Sign in to continue</p>

                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                    <div>
                        <label className="text-gray-700 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="input input-bordered w-full bg-gray-50"
                            required
                        />
                    </div>

                    <div className="relative">
                        <label className="text-gray-700 text-sm">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="input input-bordered w-full bg-gray-50 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center justify-center px-3 pt-4 text-gray-500 hover:text-red-500 focus:outline-none"
                        >
                             {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </button>
                    </div>

                    <button type="submit" className="btn bg-red-500 border-none w-full text-white hover:transition hover:scale-105">
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-red-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
