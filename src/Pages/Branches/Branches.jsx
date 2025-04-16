import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

const Branches = () => {
    const [branches, setBranches] = useState([]);

    useEffect(() => {

        fetch('/branches.json')
            .then((response) => response.json())
            .then((data) => setBranches(data));
    }, []);

    return (
        <div>
            <div className="py-20 bg-gray-50">
                <div className="w-11/12 md:w-10/12 lg:9/12  mx-auto">
                    <div className='flex justify-center items-center'>
                        <h1 className='text-center md:text-5xl text-4xl pb-20 gap-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#334155]'>
                            Our All Branches
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {branches.map((branch, index) => (
                            <div key={index} className="bg-emerald-50  p-5 rounded-lg shadow-md hover:transition hover:scale-105">
                                <div className="flex flex-col items-center text-center">

                                    <FaMapMarkerAlt className="text-3xl text-emerald-600 mb-2" />
                                    <div className="text-xl font-semibold text-emerald-600">
                                        {branch.location}
                                    </div>
                                </div>
                                <ul className="mt-2 text-gray-700 text-center flex justify-center gap-4">
                                    {branch.phones.map((phone, i) => (
                                        <li key={i} className="text-sm flex items-center gap-2">
                                            <FaPhoneAlt className="text-red-500" />
                                            {phone}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branches;
