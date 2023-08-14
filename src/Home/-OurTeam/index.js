import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

export const _OurTeam = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const [serviceUser, setServieUser] = useState([
        { id: 1, img: "/servisImg/imgUser1.png", name: "Brendon M", work: "CEO & Founder" },
        { id: 2, img: "/servisImg/imgUser2.png", name: "Jodi J. Appleby", work: "Real Estate Developer" },
        { id: 3, img: "/servisImg/imgUser3.png", name: "Justin S. Meza", work: "Listing Agent" },
        { id: 4, img: "/servisImg/imgUser4.png", name: "Susan T. Smith", work: "Buyer's Agent" }
    ])
    return (
        <div className='-OurTeam'>
            <h3>Introduce yourself to </h3>
            <h2>Our Team of Experts</h2>
            <div className='OurTeams'>
                {
                    serviceUser.map((e) => {
                        return (
                            <div className='ServiceUser' key={e.id} data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img src={e.img} />
                                <h4>{e.name}</h4>
                                <h5>{e.work}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}