import React from 'react';

const Confident = () => {
    return (
        <div>
            <div className='bg-purple-100'>
                <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20 px-4'>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-10">

                 
                        <div className="md:w-1/2 w-full flex justify-center">
                            <img
                                src="/confident.png"
                                alt="Preparation"
                                className="w-full max-w-md h-auto object-contain"
                            />
                        </div>

                        
                        <div className="md:w-1/2 w-full">
                            <h1 className="md:text-4xl text-4xl pb-10 font-bold text-[#995699] leading-tight">
                                <span className='text-red-500'> Being</span> Confident
                            </h1>
                            <p className="text-gray-600 text-justify">
                                We believe that human beings are not only physically changeable and evolving, but also in thought and wisdom. What a person can do now, and how much they are capable of, is actually less than their true potential. For example, someone who currently runs at a speed of 50 miles per hour and thinks that’s their maximum capability can actually run faster than that.
                                <br />
                                <br />
                                Believing in oneself and in one’s potential is what we call self-confidence.
                                When confidence is lacking, true abilities remain hidden.
                                <br />
                                <br />
                                The way we perceive ourselves at every moment affects even the cells in our body. If we constantly consider ourselves weak, our cells too will begin to weaken.
                                That’s why self-confidence is extremely important. Confident people not only achieve success themselves, but they also inspire confidence in those around them.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confident;