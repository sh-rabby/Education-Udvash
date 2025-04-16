import React from 'react';

const BuetTop = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-[#0f172a] to-[#334155] py-20'>
                <div className='w-11/12 md:w-10/12 lg:9/12 mx-auto px-4'>
                    <h1 className='text-center md:text-5xl text-4xl pb-16 font-bold text-white'>
                        Toppers in BUET Merit List
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-10'>
                        {/* Video 1 */}
                        <div className='w-full'>
                            <h1 className='pb-5 text-2xl font-bold text-center bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text'>
                                "How was Tofayel Ahmed's Journey?"
                            </h1>
                            <div className="w-full">
                                <iframe
                                    className='w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px] rounded-lg shadow-lg'
                                    src="https://www.youtube.com/embed/5GKzR0rjFvM?si=Kx52GgCboPeR1yx8"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div className='w-full'>
                            <h1 className='pb-5 text-2xl font-bold text-center bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text'>
                                "How was Sajeb Ahmed's Journey?"
                            </h1>
                            <div className="w-full">
                                <iframe
                                    className='w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px] rounded-lg shadow-lg'
                                    src="https://www.youtube.com/embed/atFg9sdQVxw?si=POQFxi4DGN7Ue-RC"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuetTop;