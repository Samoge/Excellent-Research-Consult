import React, { useRef, useState } from 'react';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Choose = () => {
    return (
        <div className="py-5 flex-col justify-center items-center w-full bg-[#4244451f]">
            <div className="grid justify-items-center items-center">
                <h1 className='text-center text-2xl lg:text-5xl lg:pt-20 pt-5 sina font-semibold'>Our Previous Work</h1>
                <p className='lg:w-[250px] w-[150px] h-[3px] bg-[#ff9900] mx-auto'></p>
            </div>

            <Swiper
                cssMode={true}
                navigation={false}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper mt-8"
            >
                <SwiperSlide>
                    <img src="books.jpg" alt="" className="text-center md:w-[70%] mx-auto md:h-[80vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="books.jpg" alt="" className="text-center md:w-[70%] mx-auto md:h-[80vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="books.jpg" alt="" className="text-center md:w-[70%] mx-auto md:h-[80vh]" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Choose;
