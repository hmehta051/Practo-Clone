import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './AppoinmentSlider.css'
import { AppointmentCard } from "./AppoinmentCard";

export const AppoinmentSlider = () => {
    const settings = {
        dots: false,
        className: "appoinments-slider",
        nextArrow: <img src={process.env.PUBLIC_URL + './images/home_arrow_next.svg'} alt="" style={{ position: 'absolute', zIndex: 10 }} />,
        prevArrow: <img src={process.env.PUBLIC_URL + './images/home_arrow_back.svg'} alt="" />,
        slidesToShow: 4,
        infinite: false
    }
        ;
    return (
        <div className="appoinments-slider-container">
            <Slider {...settings}>
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" title="Dentist" sub="Teething troubles? Schedule a dental checkup" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg" title="Gynecologist/Obstetrician" sub="Explore for women's health, pregnancy and infertility treatments" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg" title="Dietitian/Nutrition" sub="Get guidance on eating right, weight management and sports nutrition" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg" title="Physiotherapist" sub="Pulled a muscle? Get it treated by a trained physiotherapist" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg" title="General surgeon" sub="Need to get operated? Find the right surgeon" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg" title="Orthopedist" sub="For Bone and Joints issues, spinal injuries and more" />
            </Slider>
        </div>
    );
}