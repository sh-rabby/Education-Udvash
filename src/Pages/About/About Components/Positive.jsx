import React from 'react';

const Positive = () => {
    return (
        <div className='bg-emerald-50'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20 px-4'>
                <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left gap-10">

                    {/* Text Content */}
                    <div className="md:w-1/2 w-full">
                        <h1 className="md:text-4xl text-4xl pb-10 font-bold text-[#6abe45] leading-tight">
                            <span className='text-red-500'>Being</span>  Positive
                        </h1>
                        <p className="text-justify text-gray-600">
                            Udvash-Unmesh ensures equal services in all its branches across the country. Examinations are conducted
                            using the same question papers in every branch. All answer scripts are evaluated from a central location,
                            and the same Solve Sheet is provided to all students. The same teachers rotate among different branches
                            to conduct classes. Students' merit rankings are generated through an online software system. As a result,
                            a student can take an exam from any Udvash-Unmesh branch and compare their performance with students nationwide.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="/Positive.png"
                            alt="Equal Service"
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Positive;