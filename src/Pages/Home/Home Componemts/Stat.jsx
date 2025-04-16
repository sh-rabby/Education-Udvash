import React, { useEffect, useState } from 'react';


const Stat = () => {
    const [stat, setStat] = useState([]);

    useEffect(() => {
        fetch('/stat.json')
            .then(res => res.json())
            .then(data => setStat(data))
    }, []);

    return (
        <div className='bg-gradient-to-r from-[#0f172a] to-[#334155]'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20 px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {stat.map((item, index) => (
                        <div key={index} className="bg-white  text-center  border-1 border-gray-200 p-6 m-2 shadow-lg rounded-xl">
                            <img src={item.src} alt="" className="w-32 h-32 mx-auto mb-2" />
                            <h1 className='text-3xl font-bold py-6 text-red-500'>{item.count}</h1>
                            <p className='text-sm text-justify text-gray-600  '>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stat;
