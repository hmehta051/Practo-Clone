import { Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { AppoinmentSlider } from './AppoinmentSlider'
import { ArticleCard } from './ArticleCard'
import { ConsultCard } from './ConsultCard'
import { FacilityCard } from './FacilityCard'
import { FindDoctorSearch } from './FindDoctorSearch'
import './HomePage.css'
import { UserReviewCarousel } from './UserReviewCarousel'

export const HomePage = () => {

    const location_icon = process.env.PUBLIC_URL + 'https://www.freeiconspng.com/thumbs/location-icon-png/location-outline-icon-9.png';

    return <div className="homepage-container">
        <div className="home-search-area">
            <FindDoctorSearch />
            <div className="home-try-plus-img-container">
                <img src="https://www.practostatic.com/subscriptions/images/plus-tag.png" alt="try plus" />
            </div>
        </div>
      
        <section className="home-banner">
            <div className="home-banner-left">
                <div className="home-banner-practo-care">
                    <img src={process.env.PUBLIC_URL + 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_practo_care.png'} alt="practo_care" />
                </div>
                <p>Choose the experts in end to end surgical care.</p>
                <p>You are in safe hands</p>
                <Button className="btn-knowmore">Know more</Button>
            </div>
            <div className="home-banner-right">
                <img src={'https://www.practostatic.com/consumer-home/practo-care/1631634827/dweb_hero_banner.png'} alt="banner" />
            </div>
        </section>
        <section className="home-facilities">
            <FacilityCard image={process.env.PUBLIC_URL + 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png'} background="#AFCFED" title="Instant Video Consultation" sub="Connect within 60 secs" />
            <FacilityCard image={process.env.PUBLIC_URL + 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png'} background="#98CBD6" title="Find Doctors Near You" sub="Confirmed appoinments" />
            <FacilityCard image={process.env.PUBLIC_URL + 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png'} background="#ccd0db" title="Medicines" sub="Essentials at your doorstep" />
            <FacilityCard image={process.env.PUBLIC_URL + 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png'} background="#afcfed" title="Lab Tests" sub="Sample pickup at your home" />
            <FacilityCard image={process.env.PUBLIC_URL + 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png'} background="#d5d8fc" title="Surgeries" sub="Safe and trusted surgery centers" />
        </section>
        <section className="home-consult">
            <h2>Consult top doctors online for any health concern</h2>
            <p>Private online consultations with verified doctors in all spedialties</p>
            <div className="home-consult-card-container">
                <ConsultCard title="Period doubts or Pregnancy" image={process.env.PUBLIC_URL + 'https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png'} />
                <ConsultCard title="Acne, pimple or skin issues" image={process.env.PUBLIC_URL + 'https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png'} />
                <ConsultCard title="Performance issues in bed" image={process.env.PUBLIC_URL + 'https://www.practo.com/consult/static/images/top-speciality-sexology.svg'} />
                <ConsultCard title="Cold, cough or fever" image={process.env.PUBLIC_URL + 'https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png'} />
                <ConsultCard title="Child not feeling well" image={process.env.PUBLIC_URL + 'https://www.practo.com/consult/static/images/top-speciality-pediatric.svg'} />
                <ConsultCard title="Depression or anxiety" image={process.env.PUBLIC_URL + 'https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png'} />

            </div>
        </section>
        <section className="home-appoinments">
            <h2>Book an appointment for an in-clinic consultation</h2>
            <h3>Find experienced doctors across all specialties</h3>
           
            <AppoinmentSlider />
        </section>
        <section className="home-top-articles">
            <div className="home-top-articles-info">
                <h2>Read top articles from health experts</h2>
                <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                <button className="button button-primary">See all articles</button>
            </div>
            <ArticleCard image="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" category="coronavirus" title="12 Coronavirus Myths and Facts That You Should Be Aware Of" sub="Dr. Diana Borgio" />
            <ArticleCard image="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" category="Vitamins and supplements" title="Eating Right to Build Immunity Against Cold and Viral Infections" sub="Dr. Diana Borgio" />
        </section>
        <section className="home-user-reviews">
            <UserReviewCarousel />
        </section>
        <section className="home-practo-app">
            <div className="home-practo-app-background"></div>
            <div className="home-practo-app-content">
                <div className="home-practo-app-image-container">
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="practo-app" />
                </div>
                <div className="home-practo-app-info-container">
                    <h2>Download the Practo app</h2>
                    <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                    <p>Get the link to download the app</p>
                    <div className="home-practo-app-input">
                        <InputGroup className="home-practo-app-inputGroup" size="lg">
                            <InputLeftAddon children="+91" style={{ fontSize: "14px", fontWeight: 500, backgroundColor: "transparent" }} />
                            <Input type="tel" placeholder="Enter phone number" style={{ fontSize: "14px" }} />
                        </InputGroup>
                        <button className="button button-primary">Send SMS</button>
                    </div>
                    <div className="home-store-buttons-container">
                        <button className="button button-store"><img src={process.env.PUBLIC_URL + 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png'} alt="google-play" />Google Play</button>
                        <button className="button button-store"><img src={process.env.PUBLIC_URL + 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png'} alt="google-play" />Apple Store</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
}