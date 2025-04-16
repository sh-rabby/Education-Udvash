import React, { useEffect } from 'react';
import { useState } from 'react';

const Success = () => {
    const [success, setSuccess] = useState([]);
    useEffect(() => {
        fetch('/success.json')
            .then(res => res.json())
            .then(data => setSuccess(data))
    }, []);

    return (
        <div className='bg-pink-50'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20 px-4'>
                <div>
                    <h1 className='text-center md:text-5xl text-4xl pb-20 gap-4 font-bold text-[#6abe45]'>
                        Who Are the Successful Ones?
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6'>
                    {success.map((item, index) => (
                        <div key={index} className="bg-white text-center p-6 shadow-lg rounded-3xl flex flex-col h-full">
                            <img
                                src={item.img}
                                alt=""
                                className="w-32 h-32 mx-auto mb-4 border-4 border-[#6abe45] rounded-full"
                            />
                            <h1 className='text-3xl font-bold py-4 text-red-500'>{item.name}</h1>
                            <p className='text-md font-medium text-gray-800'>{item.admission}</p>
                            <p className='text-lg py-2 text-[#6abe45] font-bold'>{item.rank}</p>
                            <p className='text-sm text-justify text-gray-600 mt-auto'>{item.discription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Success;