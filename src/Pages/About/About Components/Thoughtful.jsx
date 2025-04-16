import React from 'react';

const Thoughtful = () => {
    return (
        <div>
            <div className='bg-purple-100'>
                <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20 px-4'>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-10">

                 
                        <div className="md:w-1/2 w-full flex justify-center">
                            <img
                                src="/src/assets/Images/thoughtful.png"
                                alt="Preparation"
                                className="w-full max-w-md h-auto object-contain"
                            />
                        </div>

                      
                        <div className="md:w-1/2 w-full">
                            <h1 className="md:text-4xl text-4xl pb-10 font-bold text-[#995699] leading-tight">
                                <span className='text-red-500'>Being</span>  Thoughtful
                            </h1>
                            <p className="text-gray-600 text-justify">
                                You might wonder—what does it mean to “be thoughtful”? After all, who doesn’t think? True, there's hardly anyone on Earth who doesn’t think at all. But here, being thoughtful means something deeper—searching for reasons, asking “why,” being able to distinguish between right and wrong, between truth and falsehood.
                                <br />
                                <br />
                                When I can tell the difference between good and bad, I’ll naturally avoid the bad. When I can identify truth from lies, I won’t resort to falsehood. Thoughtful people seek the root causes of things. Why does an apple fall to the ground instead of rising to the sky? In seeking this answer, Sir Isaac Newton discovered the law of gravity. Wondering how birds fly led humans to invent the airplane.
                                <br />
                                <br />
                                For us, education isn’t just about earning certificates or degrees.
                                True education means becoming enlightened—becoming thoughtful.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thoughtful;