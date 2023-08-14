import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export const Right_H = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="Right-H">
            <div className="Search" data-aos="fade-left">
                <div>
                    <h2>For Sale</h2>
                    <h2>For Rent</h2>
                </div>
                <input />
                <select></select>
                <select></select>
                <h3>Advance Search</h3>
                <button><i className="fa fa-search" aria-hidden="true"></i>Search</button>
            </div>
            <div className="CustomertRight" data-aos="fade-left">
                <div className="Customers">
                    <img src="/imgHome/imgNewHome.png" />
                    <h2>
                        200+ New<br />
                        Listings Everyday!
                    </h2>
                </div>
            </div>
        </div>
    )
}