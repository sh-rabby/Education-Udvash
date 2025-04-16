import React, { useEffect, useState } from 'react';
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Programs = () => {
    const [catagory, setcatagory] = useState([]);
    const [programs, setprograms] = useState([]);
    const [catagoryName, setCatagoryName] = useState("All"); // Default to "All"
    const [activeCategory, setActiveCategory] = useState("All"); // Default active category

    useEffect(() => {
        fetch('catagory.json')
            .then(res => res.json())
            .then(data => setcatagory(data)); // No need to add "All" manually now
    }, []);

    useEffect(() => {
        fetch('programs.json')
            .then(res => res.json())
            .then(data => setprograms(data));
    }, []);

    const handleCatagoryName = (catagoryN) => {
        setCatagoryName(catagoryN.name); // Update category filter
        setActiveCategory(catagoryN.name); // Set the active category
    };

    const filteredProgram = catagoryName && catagoryName !== "All"
        ? programs.filter(program => program.catagory === catagoryName)
        : programs;

    return (
        <div className='bg-gray-50'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20'>
                <div>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-center md:text-5xl text-4xl pb-20 gap-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#334155]'>
                            Our Programs
                        </h1>
                    </div>
                </div>

                <div className="w-full pb-20 px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {
                            catagory.map((catagory, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCatagoryName(catagory)}
                                    className={`btn ${activeCategory === catagory.name ? 'bg-red-500 text-white' : 'bg-gray-100 border border-green-500 text-black'} hover:bg-green-500 rounded-lg px-6 py-2 text-sm md:text-base whitespace-nowrap`}
                                >
                                    {catagory.name}
                                </button>
                            ))
                        }
                    </div>
                </div>

                <div className=' pb-20 px-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
                        {
                            filteredProgram.map(program => (
                                <div key={program.id} className="flex flex-col justify-between bg-white rounded-2xl shadow-xl h-full">
                                    <img className='rounded-t-2xl w-full object-cover' src={program.image} alt={program.title} />
                                    <div className='flex flex-col justify-between p-6 h-full'>
                                        <h1 className='text-center py-2 text-red-500 text-xl font-bold'>{program.title}</h1>
                                        <div className='text-gray-600 font-semibold'>
                                            <p className='flex items-center gap-2'><TbPointFilled />{program.point1}</p>
                                            <p className='flex items-center gap-2'><TbPointFilled />{program.point2}</p>
                                            <p className='flex items-center gap-2'><TbPointFilled />{program.point3}</p>
                                            <p className='flex items-center gap-2'><TbPointFilled />{program.point4}</p>
                                            <p className='flex items-center gap-2'><TbPointFilled />{program.point5}</p>
                                            <p className='flex items-center gap-2'><TbPointFilled />{program.point6}</p>
                                        </div>
                                        <div className='flex justify-center gap-4 py-6 flex-wrap'>
                                            <button className="btn bg-red-500 hover:bg-red-600 text-white px-10 py-2 w-full md:w-auto border-none">
                                                Details
                                            </button>

                                            <Link to="/login" className="w-full md:w-auto">
                                                <button className="btn bg-green-500 hover:bg-green-600 text-white px-10 py-2 w-full md:w-auto border-none">
                                                    Enroll Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
