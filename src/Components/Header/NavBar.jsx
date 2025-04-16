import React from 'react';
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const NavBar = () => {
    return (
        <div className='bg-white shadow-lg sticky top-0 w-full z-50'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-2'>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden mr-6">
                                <CgMenuLeftAlt className='text-2xl text-red-500' />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white text-black  space-y-4 mt-7 w-75 h-screen px-8  md:px-10 py-6 -ml-6 md:-ml-10 shadow-md gap-2 ">
                                <Link className='border-b-1 py-2 border-red-400 hover:text-red-500' to="/">Home</Link>
                                <Link className='border-b-1 py-2 border-red-400 hover:text-red-500' to="/about">About</Link>
                                <Link className='border-b-1 py-2 border-red-400 hover:text-red-500' to="/programs">Programs</Link>
                                <Link className='border-b-1 py-2 border-red-400 hover:text-red-500' to="/branches">Branches</Link>
                                <Link className='border-b-1 py-2 border-red-400 hover:text-red-500' to="/contact">Contact</Link>
                                <a href="tel:09666775566">
                                    <div className='flex justify-baseline items-center gap-2  text-red-500 font-medium border p-1 rounded-xl '>
                                        <IoCall />
                                        <p>09666775566</p>
                                    </div>
                                </a>
                                <div className='flex justify-baseline items-center gap-2  text-red-500 font-medium border p-1 rounded-xl '>
                                    <MdOutlineEmail />
                                    <a href="mailto:info@udvash-unmesh.com">
                                        <p>info@udvash-unmesh.com</p>
                                    </a>
                                </div>
                                <div className='flex justify-center items-center gap-4 text-2xl text-red-500 py-4'>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaSquareFacebook className='hover:transition hover:scale-110' />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagramSquare className='hover:transition hover:scale-110' />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitterSquare className='hover:transition hover:scale-110' />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className='hover:transition hover:scale-110' />
                                    </a>
                                </div>
                            </ul>
                        </div>
                        <div className='flex justify-center items-center gap-8'>
                            <img className='w-32' src="/public/Udvash-Logo.webp" alt="" />

                        </div>
                    </div>
                    <div className="navbar-center text-black hidden lg:flex gap-4 font-medium">
                        <Link className='hover:text-red-500' to="/">Home</Link>
                        <Link className='hover:text-red-500' to="/about">About</Link>
                        <Link className='hover:text-red-500' to="/programs">Programs</Link>
                        <Link className='hover:text-red-500' to="/branches">Branches</Link>
                        <Link className='hover:text-red-500' to="/contact">Contact</Link>
                    </div>
                    <div className="navbar-end gap-6">
                        <div className='hidden lg:block'>
                            <a href="tel:09666775566">
                                <div className='flex justify-between items-center gap-2 text-xl  border-1 border-red-500 rounded-full p-2 text-red-500 font-medium hover:transition hover:scale-110'>
                                    <IoCall />

                                </div>
                            </a>
                        </div>
                        <Link to="/login"><button className='btn bg-red-500 text-white hover:bg-red-600 border-none'>Join Now</button></Link>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavBar;