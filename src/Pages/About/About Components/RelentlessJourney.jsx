import React from 'react';

const RelentlessJourney = () => {
    return (
        <div className='bg-gray-50'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20 px-4'>
                <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left gap-10">


                    <div className="md:w-1/2 w-full">
                        <h1 className="md:text-4xl text-4xl pb-10 font-bold text-[#6abe45] leading-tight">
                            <span className='text-red-500'>Relentless Journey</span>  with the Vision of Change
                        </h1>
                        <p className="text-justify text-gray-600">
                            Human civilization has progressed for thousands of years, and throughout that time, people have explored and understood one another—yet humanity remains full of mystery. Despite sharing similar physical traits, human beings are remarkably diverse in thought and action. While one person dreams of space, another may fear stepping outside. This difference lies in human qualities.
                            <br />
                            <br />
                            We believe that a truly capable person possesses four key traits:Thoughtfulness, Positivity, Confidence, A clear sense of values and accountability
                            <br />
                            <br />
                            The more these qualities are developed in someone, the more worthy they are as a human being.
                            The four flames in the Udvash logo symbolize these four essential traits, reflecting our commitment to nurturing these qualities in every individual.


                        </p>
                    </div>


                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="/src/assets/Images/Relentless.png"
                            alt="Equal Service"
                            className="w-fit max-w-md h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RelentlessJourney;