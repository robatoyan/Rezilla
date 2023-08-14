import { useState } from 'react';
import { MyContex } from './MyContext';
import { Right_T } from './Right-T';
import { Left_T } from './left-T';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

export const _Testimonials = () => {
 
    const [testimonials, setTestimonails] = useState([
        { id: 1, textUser: "Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. ", desc: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!", img: "https://img.freepik.com/free-icon/black-male-user-symbol_318-60703.jpg", nameUser: "Barbara D. Smith" },
        { id: 2, textUser: "include climate change and habitat destruction. They feature in", desc: "The encyclopedia is home to 10.9% of articles in all Wikipedias (down from more than 50% in 2003).[19][20] The English Wikipedia currently has 45,944,412 registered accounts of which 892 are administrators.", img: "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg", nameUser: "Disputed articles" },
        { id: 3, textUser: "other language editions due to its broader editor base.[2]", desc: "as owner of the site.[27][28] When it was founded, the committee consisted of 12 arbitrators divided into three groups of four members each.[27][29]", img: "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg", nameUser: "Military history" },
        { id: 4, textUser: " volume of the compressed texts of its articles amounted to 20 gigabytes.[18]", desc: "d for about 40% of active editors, followed by British and Indian editors accounting for about 10% of each, and Canadian and Australian at about 5%.[30]", img: "https://www.w3schools.com/w3images/avatar2.png", nameUser: "Threats against" }
    ])
    const [index, setIndex] = useState(0)
    const next = () => {
        if (index === testimonials.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }

    }
    const prev = () => {
        if (index === 0) {
            setIndex(testimonials.length - 1)
        } else {
            setIndex(index - 1)
        }

    }
    return (
        <div className='-Testimonials'>
            <MyContex.Provider value={{ testimonials, setTestimonails, index, setIndex, next, prev }}>
                <div className='TestimonialsIcons'>
                    <Left_T />
                    <Right_T />
                </div>
            </MyContex.Provider>
        </div>
    )
}