import { useEffect, useState } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const _HomeFooter = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="-HomeFooter">
            <p>Trusted by 100+ Companies across the globe! </p>
            <div className='-HomeFooterImg'>
                <img src='/imgHome/Google.jpg' data-aos="fade-right" />
                <img src='/imgHome/Amazon.jpg' data-aos="fade-up-right" />
                <img src='/imgHome/Logitech.jpg' data-aos="fade-down-right" />
                <img src='/imgHome/Spotif.jpg' data-aos="fade-down-left" />
                <img src='/imgHome/Samsung.jpg' data-aos="fade-up-left" />
                <img src='/imgHome/Netflixs.jpg' data-aos="fade-left" />
            </div>
            <Swiper
                data-aos="fade-down-right"
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }

                }}
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='SwiperHomFooter'
            >
                <SwiperSlide >
                    <img src='/imgHome/Google.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/imgHome/Amazon.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/imgHome/Logitech.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/imgHome/Spotif.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/imgHome/Samsung.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/imgHome/Netflixs.jpg' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}