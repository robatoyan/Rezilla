import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export const Right_A = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="Right_A" data-aos="zoom-in-up">
            <img src="/aboutImg/img1.png" className="img1" />
            <div>
                <img src="/aboutImg/img2.png" className="img2" />
                <img src="/aboutImg/img4.png" className="img3" />
            </div>
            <img src="/aboutImg/2022.png" className="img4" />
        </div>
    )
}