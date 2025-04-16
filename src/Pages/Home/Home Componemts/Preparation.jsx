import React from 'react';

const Preparation = () => {
    return (
        <div>
            <div className='bg-purple-100'>
                <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20 px-4'>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-10">

                        {/* IMAGE SECTION */}
                        <div className="md:w-1/2 w-full flex justify-center">
                            <img
                                src="/src/assets/Images/prostuti.png"
                                alt="Preparation"
                                className="w-full max-w-md h-auto object-contain"
                            />
                        </div>

                        {/* TEXT SECTION */}
                        <div className="md:w-1/2 w-full">
                            <h1 className="md:text-4xl text-4xl pb-10 font-bold text-[#995699] leading-tight">
                                <span className='text-red-500'>No Matter the Situation</span><br /> Preparation Never Stops
                            </h1>
                            <p className="text-gray-600 text-justify">
                                Under the constant supervision of our dedicated software team, Udvash-Unmesh offers the country's best online learning platform (online.udvash-unmesh.com). In the event of a pandemic like COVID-19 or any government-imposed restrictions leading to the closure of educational institutions, all academic activities will seamlessly continue online. This ensures that students' continuous preparation remains unaffected.
                                <br /><br />
                                The remarkable success of Udvash-Unmesh students in various admission tests stands as a testament to this commitment. Notably, to ensure balanced preparation even in the online format, Udvash-Unmesh is the only institution in Bangladesh that conducts online written exams, simulating the experience of offline written tests alongside MCQ assessments.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Preparation;