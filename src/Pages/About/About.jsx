import React from 'react';
import Positive from './About Components/Positive';
import Thoughtful from './About Components/Thoughtful';
import RelentlessJourney from './About Components/RelentlessJourney';
import Confident from './About Components/Confident';
import Accountability from './About Components/Accountability';

const About = () => {
    return (
        <div className='bg-gray-50'>
            <div className='flex justify-center items-cente pt-20'>
                <h1 className='text-center md:text-5xl text-4xl pb-20 gap-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#334155]'>
                    About Us
                </h1>
            </div>
            <RelentlessJourney></RelentlessJourney>
            <Thoughtful></Thoughtful>
            <Positive></Positive>
            <Confident></Confident>
            <Accountability></Accountability>
        </div>
    );
};

export default About;