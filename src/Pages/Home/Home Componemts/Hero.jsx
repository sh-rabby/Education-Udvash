import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';

const Hero = () => {
    const images = [
        "/src/assets/Images/1.png",
        "/src/assets/Images/DU2024Top3Web1.png",
        "/src/assets/Images/EAP24Top3web2.png",
        "/src/assets/Images/Kha01.png",
        "/src/assets/Images/Kha03.png"
    ];
    return (
        <div className='bg-gradient-to-r from-[#0f172a] to-[#334155]   lg:h-screen' >
            <div className="w-full h-[60vh] md:h-[75vh] lg:h-screen">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="background-color: white; width: 10px; height: 10px; border-radius: 50%; margin: 0 5px;"></span>`;
                        }
                    }}
                    className="w-full h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full py-20 md:py-0 lg:py-0 lg:h-screen object-center md:object-center lg:object-center"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default Hero;