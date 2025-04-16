import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div>
            <div className='bg-red-500 py-2 hidden lg:block'>
                <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center text-white gap-2 hover:transition hover:scale-105 '>
                            <MdOutlineEmail />
                            <a href="mailto:info@udvash-unmesh.com">
                                <p>info@udvash-unmesh.com</p>
                            </a>
                        </div>
                        <div>
                            <div className='flex justify-center items-center gap-2 text-xl text-white'>
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
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopHeader;