import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

export const _Service = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const [service, setService] = useState([
        { id: 1, img: "/servisImg/img1.png", number: 216, addres: "New York City, NY" },
        { id: 2, img: "/servisImg/img3.png", number: 141, addres: "Houston, TX" },
        { id: 3, img: "/servisImg/img2.png", number: 212, addres: "San Diego, CA" },
        { id: 4, img: "/servisImg/img4.png", number: 183, addres: "Philadelphia, PA" },
        { id: 5, img: "/servisImg/img5.png", number: 112, addres: "San Francisco, CA" }
    ])
    return (
        <div className='-Service' id='Service'>
            <h3 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">AREAS ACROSS THE TOWN</h3>
            <h2 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">Neighborhood Properties</h2>
            <div className='Services'>
                {
                    service.map((e) => {
                        return (
                            <div className='Servic' key={e.id} data-aos="fade-up"
                                data-aos-duration="3000">
                                <img src={e.img} />
                                <div className='ServiceHomeData'>
                                    <h4>{e.number}</h4>
                                    <h5>{e.addres}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}