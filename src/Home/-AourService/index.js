import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

export const _AourService = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const [service, setService] = useState([
        { id: 1, title: "Buy a New Home", text: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. " },
        { id: 2, title: "Sell a House", text: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. " },
        { id: 3, title: "Rent a House", text: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. " }
    ])
    return (
        <div className='-AourService' >
            <h3 data-aos="zoom-out-left">OUR SERVICES</h3>
            <h2 data-aos="zoom-out-left">Donec porttitor euismod dignissim</h2>
            <div className='AourServer'>
                {
                    service.map((e) => {
                        return (
                            <div className='servic' key={e.id} data-aos="zoom-out-right">
                                <div className='servisReduce'><i className="fa fa-home" aria-hidden="true"></i></div>
                                <h2>{e.title}</h2>
                                <h3>{e.text}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}