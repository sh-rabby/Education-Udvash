import React from 'react';

const Services = () => {
    return (
        <div className='bg-gray-50'>
            <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto py-20'>
                <h1 className='text-center md:text-5xl text-4xl pb-20  gap-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#334155] '>Our Unique Range of Services</h1>

                <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-20 text-gray-600 font-bold'>
                    <div className="flex flex-col items-center text-center">
                        <img src="/src/assets/Images/onlineofline.png" alt="" />
                        <h1 className="mt-2">Offline/Online Programs</h1>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/src/assets/Images/teacher.png" alt="" />
                        <h1 className="mt-2">Talented and Experienced Teachers</h1>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/src/assets/Images/materials.png" alt="" />
                        <h1 className="mt-2">High-Quality Study Materials</h1>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/src/assets/Images/concept.png" alt="" />
                        <h1 className="mt-2">Concept-Based Classes</h1>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/src/assets/Images/unique.png" alt="" />
                        <h1 className="mt-2">Unique Exam System</h1>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/src/assets/Images/Q & A.png" alt="" />
                        <h1 className="mt-2">24/7 Q&A Service</h1>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/src/assets/Images/sms.png" alt="" />
                        <h1 className="mt-2">Auto SMS Result</h1>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/src/assets/Images/analysis.png" alt="" />
                        <h1 className="mt-2">Exam Analysis Report</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;