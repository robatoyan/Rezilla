import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { SliderSwiper } from "./slideSwiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const Left_H = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="Left-H">
            <h3 data-aos="fade-right">REAL ESTATE</h3>
            <h1 data-aos="fade-right">
                Find a perfect <br />
                home you love..!
            </h1>
            <p data-aos="fade-right">
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.<br />
                Integer a dolor eu sapien sodales vulputate ac in purus.
            </p>
            <div className="Swiper" data-aos="fade-right">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="SwiperSlider"
                >
                    <div className="reduseSwiper"></div>
                    <SwiperSlide>
                        <img src="/imgHome/img4.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/imgHome/img3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/imgHome/img2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/imgHome/img4.png" />
                    </SwiperSlide>
                    <SliderSwiper />
                </Swiper>
            </div>
            <div className="CustomerLeft" data-aos="fade-right">
                <div className="Customers">
                    <div className="Customersimg">
                        <img src="/imgHome/imgUser1.png" />
                        <img src="/imgHome/imgUser2.png" />
                        <img src="/imgHome/imgUser3.png" />
                        <img src="/imgHome/imgUser4.png" />
                        <img src="/imgHome/imgUser5.png" />
                    </div>
                    <h2>
                        72k+ Happy<br />
                        Customers
                    </h2>
                </div>
            </div>
        </div>
    )
}