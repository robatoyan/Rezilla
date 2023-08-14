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

export const _Blogs = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const [blogs, setBlogs] = useState([
        { id: 1, img: "/blogsimg/img1.png", help: "Top 10 Home Buying Mistakes to Avoid", text: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum", date: 28, month: "Tue" },
        { id: 2, img: "/blogsimg/img2.png", help: "How to Stage Your Home for a Quick Sale", text: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.", date: 13, month: "Mon" },
        { id: 3, img: "/blogsimg/img3.png", help: "5 Tips for First-Time Home Sellers", text: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.", date: 26, month: "Wed" },
        { id: 4, img: "/blogsimg/img1.png", help: "Top 10 Home Buying Mistakes to Avoid", text: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum", date: 28, month: "Tue" },
        { id: 5, img: "/blogsimg/img2.png", help: "How to Stage Your Home for a Quick Sale", text: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.", date: 13, month: "Mon" },
        { id: 6, img: "/blogsimg/img3.png", help: "5 Tips for First-Time Home Sellers", text: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.", date: 26, month: "Wed" }
    ])
    return (
        <div className='_Blogs'>
            <h2 data-aos="zoom-out-left">WHAT’S TRENDING</h2>
            <h3 data-aos="zoom-out-left">Latest Blogs & Posts</h3>
            <div className='blogs' id='Blogs'>
                <Swiper
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                        650: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        }

                    }}
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='swiperBlogs'
                >
                    {
                        blogs.map((e) => {
                            return (
                                <SwiperSlide className='swiperSLiderBlogs' key={e.id}>
                                    <div className='imgBlogs'>
                                        <img src={e.img} />
                                        <div className='dateBlogs'>
                                            <span>{e.date}</span>
                                            <p>{e.month}</p>
                                        </div>
                                    </div>
                                    <h4>{e.help}</h4>
                                    <h5>{e.text}</h5>
                                    <div className='ReduserBlogs'>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}