import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UserReviewCarousel.css"
import Slider from "react-slick";

export const UserReviewCarousel = () => {
    const settings = {
        dots: true,
        autoplay: true,
        className: "user-review-slider",
        nextArrow: <img src={process.env.PUBLIC_URL + './images/home_arrow_next.svg'} alt="" />,
        prevArrow: <img src={process.env.PUBLIC_URL + './images/home_arrow_back.svg'} alt="" />
    }
        ;
    return (
        <div className="user-reviews-carousel-container">
            <h2>What our users have to say</h2>
            <Slider {...settings}>
                <div className="user-review-item">
                    <p>
                        Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.
                    </p>
                    <div><span><img src={process.env.PUBLIC_URL + 'https://accounts.practo.com/profile_picture/16361788/medium_thumbnail'} alt="" width="16px" /></span>Amit Sharma</div>
                </div>
                <div className="user-review-item">
                    <p>
                        Very easy to book,maintain history. Hassle free from older
                        versions of booking appointment via telephone.. Thanks Practo for
                        making it simple.
                    </p>
                    <div><span><img src={process.env.PUBLIC_URL + 'https://accounts.practo.com/profile_picture/16361788/medium_thumbnail'} alt="" width="16px" /></span>Jyothi Bhatia</div>
                </div>
                <div className="user-review-item">
                    <p>
                        Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way
                    </p>
                    <div><span><img src={process.env.PUBLIC_URL + 'https://accounts.practo.com/profile_picture/16361788/medium_thumbnail'} alt="" width="16px" /></span>Avinash Kumar</div>
                </div>
            </Slider>
        </div>
    );
}