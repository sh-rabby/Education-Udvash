import React from 'react';
import { Link } from 'react-router-dom';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-red-500'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto  py-10'>
                <footer className="footer sm:footer-horizontal text-white pb-5">
                    <img src="/public/footer-logo.webp" alt="" />
                    <div>
                        <h6 className="font-bold text-2xl">Help</h6>
                        <Link to="/about">About</Link>
                        <Link to="/branches">Branch List</Link>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms & Conditions</Link>
                    </div>
                    <div >
                        <h6 className="font-bold text-2xl">Explore</h6>
                        <Link to="/programs">Programs</Link>
                        <Link to="#">Blog</Link>
                        <Link to="/branches">Teacher Registration</Link>
                        <Link to="#">Career / Recruitment</Link>
                    </div>
                    <div>
                        <h6 className="font-bold text-2xl">Get In Touch</h6>
                        <p><span className='font-bold'>Address:</span> 78, Green Road (3rd Floor), <br /> Farmgate, Tejgaon, Dhaka-1205</p>
                        <p><span className='font-bold'>Helpline:</span> <a href="tel:09666775566">09666775566</a></p>
                        <p><span className='font-bold'>Email::</span> <a href="mailto:info@udvash-unmesh.com">info@udvash-unmesh.com</a></p>
                        <div>
                            <div className='flex justify-center items-center gap-2 text-xl text-white'>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaSquareFacebook />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagramSquare />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitterSquare />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                </footer>
                <div className='flex justify-center text-white border-t-1 pt-5 border-gray-200'>
                    <p className='text-center'>Copyright © Udvash Academic & Admission Care. All rights reserved -   {new Date().getFullYear()} </p>
                </div>
            </div>

        </div>
    );
};

export default Footer;