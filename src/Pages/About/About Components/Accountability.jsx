import React from 'react';

const Accountability = () => {
    return (
        <div className='bg-emerald-50'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20 px-4'>
                <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left gap-10">


                    <div className="md:w-1/2 w-full">
                        <h1 className="md:text-4xl text-4xl pb-10 font-bold text-[#6abe45] leading-tight">
                            <span className='text-red-500'>Clarity </span>about Values and Accountability
                        </h1>
                        <p className="text-justify text-gray-600">
                            Values are the moral principles and social norms that develop gradually and help maintain peace and order in society. When these values weaken, societal decay begins, leading to issues like corruption, crime, addiction, and moral degradation. Essential components of values include honesty, discipline, patience, responsibility, respect, and tolerance. These values are not just guidelines—they shape our character and define our worth as human beings. Without them, people may appear human in form but lack the true qualities that make one a noble and worthy person. Therefore, to become truly capable individuals, we must cultivate strong values and a clear sense of accountability within ourselves. Ultimately, living even a short life as a good, value-driven person is far more meaningful than a long life without purpose or integrity..
                        </p>
                    </div>


                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="/src/assets/Images/Accountability.png"
                            alt="Equal Service"
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Accountability;