import { useSwiper } from "swiper/react"

export const SliderSwiper = () => {
    const swiper = useSwiper()
    return (
        <div className="ButtonClick">
            <button onClick={() => swiper.slidePrev()}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
            <button onClick={() => swiper.slideNext()}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
        </div>
    )
}