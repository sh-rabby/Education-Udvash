import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log("Signup Data:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-emerald-50  rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
                    Create an Account
                </h2>
                <p className="text-sm text-center text-gray-500">
                    Let's get started with your free account
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                        <label
                            htmlFor="name"
                            className="block text-xs sm:text-sm md:text-base text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="input input-bordered w-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#63B295]"
                            required
                        />
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                        <label
                            htmlFor="email"
                            className="block text-xs sm:text-sm md:text-base text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="input input-bordered w-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#63B295]"
                            required
                        />
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                        <label
                            htmlFor="password"
                            className="block text-xs sm:text-sm md:text-base text-gray-700"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="input input-bordered w-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#63B295]"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-500 hover:text-[#518e79] focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-xs sm:text-sm md:text-base text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className="input input-bordered w-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#63B295]"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-500 hover:text-red-500 focus:outline-none"
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash size={18} />
                                ) : (
                                    <FaEye size={18} />
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-block border-none bg-red-500 text-xs sm:text-sm md:text-base  text-white hover:transition hover:scale-105"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-xs sm:text-sm md:text-base text-gray-500">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-red-500 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;