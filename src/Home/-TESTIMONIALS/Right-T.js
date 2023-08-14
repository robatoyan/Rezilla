import { useContext, useEffect, useState } from "react"
import { MyContex } from "./MyContext"
import { motion } from "framer-motion";

import 'aos/dist/aos.css';
import Aos from "aos";

export const Right_T = () => {
    const { testimonials, setTestimonails, index, setIndex, } = useContext(MyContex)
    useEffect(() => {
        Aos.refresh()
    }, [index])
    return (
        <motion.div className="Right_T" data-aos="fade-right"
            animate={{ x: "0px" }}
            initial={{ x: "200px" }}
            transition={{ duration: "3px" }}
            key={index}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="38" viewBox="0 0 60 38" fill="none">
                <path d="M15.9606 0L0 37.2632H21.7241L30.1478 0H15.9606ZM45.8128 0L29.8522 37.2632H51.5764L60 0H45.8128Z" fill="#FFC700" fill-opacity="0.4" />
            </svg>
            <p>
                {testimonials[index].desc}
            </p>
            <hr />
            <div className="Right-UserData" >
                <img src={testimonials[index].img} />
                <h3>{testimonials[index].nameUser}</h3>
                <div className="Star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star " aria-hidden="true"></i>
                </div>
            </div>
        </motion.div>
    )
}