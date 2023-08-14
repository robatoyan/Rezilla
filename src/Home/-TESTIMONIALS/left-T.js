import { useContext, useEffect } from "react"
import { MyContex } from "./MyContext"
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Left_T = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const { testimonials, setTestimonails, index, setIndex, next, prev } = useContext(MyContex)
    return (
        <div className="Left_T" data-aos="fade-left">
            <h3>TESTIMONIALS</h3>
            <h2>
                Look What Our <br />
                Customers Say!
            </h2>
            <p>
                {testimonials[index].textUser}
            </p>
            <div className="buttonClick">
                <button onClick={() => {
                    prev()
                }} ><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button onClick={() => {
                    next()
                }}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}