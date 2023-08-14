import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const _Listining = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const [list, setList] = useState([
        { id: 1, img: "/listingimg/img1.png", price: 5.974, place: "Tranquil Haven in the Woods", text: "103 Wright CourtBurien, WA 98168", title: "Popular", bads: 4, bats: 3, sel: "sele" },
        { id: 2, img: "/listingimg/img2.png", price: 1.975, place: "Serene Retreat by the Lake", text: "1964 Jehovah Drive, VA 22408", title: "New Listing", bads: 4, bats: 2, sel: "rent" },
        { id: 3, img: "/listingimg/img3.png", price: 3.456, place: "Charming Cottage in the Meadow", text: "1508 Centennial Farm RoadHarlan, 51537", title: "Discounted Price", bads: 4, bats: 3, sel: "sele" },
        { id: 4, img: "/listingimg/img1.png", price: 2.389, place: "Tranquil Haven in the Woods", text: "103 Wright CourtBurien, WA 98168", title: "Popular", bads: 4, bats: 2, sel: "rent" },
        { id: 5, img: "/listingimg/img2.png", price: 5.978, place: "Grand Estate on the Hilltop", text: "103 Wright CourtBurien, WA 98168", title: "New Listing", bads: 2, bats: 3, sel: "sele" },
        { id: 6, img: "/listingimg/img3.png", price: 5.979, place: "Tranquil Haven in the Woods", text: "103 Wright CourtBurien, WA 98168", title: "Discounted Price", bads: 5, bats: 3, sel: "rent" }
    ])
    const [filterTitle, setFilterTitle] = useState("All")
    const [ids, setIds] = useState(1)
    return (
        <div className="-Listining" id='Listning'>
            <div className="Lasted" data-aos="zoom-out">
                <div>
                    <h3>CHECKOUT OUR NEW</h3>
                    <h2>Latest Listed Properties</h2>
                    <p>
                        Donec porttitor euismod dignissim. Nullam a lacinia ipsum,<br />
                        nec dignissim purus.
                    </p>
                </div>
                <ul>
                    <li className={ids == 1 ? "activli" : "noactivli"} onClick={() => {
                        setFilterTitle("All")
                        setIds(1)
                    }}>All</li>
                    <li className={ids == 2 ? "activli" : "noactivli"} onClick={() => {
                        setFilterTitle("sele")
                        setIds(2)
                    }}>Sell</li>
                    <li className={ids == 3 ? "activli" : "noactivli"} onClick={() => {
                        setFilterTitle("rent")
                        setIds(3)
                    }}>Rent</li>
                </ul>
            </div>
            <div className="SwiperListining">
                <Swiper
                    data-aos="zoom-out"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 2,
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
                        }

                    }}
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={-210}
                    slidesPerView={3}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='swiperListening'
                >
                    {
                        list.filter((e) => e.sel == filterTitle || filterTitle == "All").map((e) => {
                            return (
                                <SwiperSlide key={e.id}>
                                    <div className='Listes'>
                                        <div className='LisesImg'>
                                            <img src={e.img} />
                                        </div>
                                        <div className='ListiningData'>
                                            <h3>${e.price}</h3>
                                            <h2>{e.place}</h2>
                                            <p>{e.text}</p>
                                            <div>
                                                <i className="fa fa-bed" aria-hidden="true"></i>
                                                {e.bads}
                                                <i className="fa fa-bath" aria-hidden="true"></i>
                                                {e.bats}
                                            </div>
                                        </div>
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