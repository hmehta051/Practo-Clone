import "./medicine.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useRef, useState } from "react";
import { SlideInLeft, SlideInRight} from "react-animated-components";
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';


//importing images
import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";

import skin from "../images/skin.webp";
import sexual from "../images/sexual.webp";
import weight from "../images/weight.webp";
import pain from "../images/pain.webp";
import baby from "../images/baby.webp";
import fitness from "../images/fitness.webp";
import family from "../images/family.webp";
import alternate from "../images/alternate.webp";
import heart from "../images/heart.webp";
import cough from "../images/cough.webp";
import daibetes from "../images/diabaties.webp";
import health from "../images/health.webp";
import device from "../images/device.webp";
import personal from "../images/personal.webp";
import women from "../images/women.webp";

import article1 from "../images/article1.webp";
import article2 from "../images/article2.png";

import review1 from "../images/review1.png";
import review2 from "../images/review2.png";
import review3 from "../images/review3.png";
import review4 from "../images/review4.png";

import practo from "../images/practo.webp"
import { SwipeRight } from "@mui/icons-material";
export const Medicine=()=>{
    //corousel
    const CorouselImage = [image1, image2, image3,image4];
    const Review=[review1, review2, review3, review4];
    const index=useRef(0);
    const reviewIndex=useRef(0);

    const [reviewImage,setreviewImage]=useState(Review[0]);
    const [imageURL, setimageURL]=useState(CorouselImage[0]);

    useEffect(()=>{
        setInterval(()=>{
            if(index.current===CorouselImage.length-1)
                index.current=0
            else
                index.current=index.current+1

            setimageURL(CorouselImage[index.current]);
            
        },5000);        
    },[])

    const ForwardCorousel=()=>{
        if (index.current === CorouselImage.length)
            index.current = 0
        else
            index.current = index.current + 1

        setimageURL(CorouselImage[index.current]);
    }

    const BackwardCorousel=()=>{
        if(index.current===0)
            index.current=3;
        else
            index.current=index.current-1;

        setimageURL(CorouselImage[index.current]);
    }

    const ReviewForwardCorousel=()=>{
        if (reviewIndex.current === Review.length-1)
            reviewIndex.current = 0
        else
            reviewIndex.current = reviewIndex.current + 1

        setreviewImage(Review[reviewIndex.current])
    }

    const ReviewBackwardCorousel = () => {
        if (reviewIndex.current === 0)
            reviewIndex.current = 3;
        else
            reviewIndex.current = reviewIndex.current - 1;

        setreviewImage(Review[reviewIndex.current])
    }

    const [seeMore, setseeMore]=useState(false);

    const seeMoreIntroduction=()=>{
        return (
            <div>
                <h2>Get every medicine on time & everytime:</h2>
                <p> When you purchase medicines on Practo, you can be assured that you will get the medicines you order.Our trained pharmacists, partner pharmacies and medical stores ensure that your medicines are delivered to you on time, anywhere in India * .Practo is powered by intelligent systems that remembers all the medicines you ordered online and makes sure they 're always available whenever you need them. So, you'll always find your medicines on Practo 's online pharmacy, anywhere in India*.</p>
                <h2>Buy Fitness and Wellness Products:</h2>
                <p>When you’re doing your best to stay fit and healthy, you shouldn’t have to worry about having everything you need to do so. With Practo Pharmacy, you can order everything you need to stay in shape and take care of yourself. From fitness enthusiasts in need of protein supplements or health drinks, to health conscious individuals looking for herbal supplements, health food and vitamin supplements.</p>
                <h2>Buy Personal Care Products:</h2>
                <p>Giving your body the care it needs just got a whole lot simple. Choose from an extensive list of personal care products that includes top brands like Pantene, Himalaya, Neutrogena, Brylcreem, Durex and Karmasutra. Find products for skin care, hair care and lip care, as well as products for more intimate purposes like sexual wellness.</p>
                <h2>Buy Health Devices & Surgical Supplies:</h2>
                <p>Good healthcare begins at home. Keep your first-aid kits stocked with thermometer, bandages, antiseptic solutions, mosquito repellent and other essential medical equipment such as health monitors and weighing scales.</p>
                <h2>Buy Ayurvedic Medicines:</h2>
                <p> Searching
                for ayurvedic medicines ? Avail the benefits of traditional medicine created right here in India, with products formulated for stomach care, liver care, sexual wellness and more</p>
                <h2>Practo provides services to the following cities:</h2>
                <p>Bengaluru, New Delhi, Mumbai, Thane, Kolkata, Hyderabad, Chennai, Pune, Ahmedabad, Gurgaon, Ghaziabad, Noida, Faridabad, Mysuru, Hubli, Mandya, Mangaluru, Chitradurga, Dharwad, Chickmagalur, Belgavi, Badami, Gadag, Dandeli, Udupi, Dharmasthala, Bhadravati, Ranebennur, Hampi, Davangere, Hassan, Kodagu, Raichur, Vijaypura, Kalaburagi, Shimoga, Bagalkot, Kochi, Coimbatore, Jaipur, Chandigarh, Jalandhar, Lucknow, Bhopal, Bhubaneshwar, Dehradun, Indore, Nagpur, Amritsar, Ludhiana, Agra, Allahabad, Anakapalli, Aurangabad, Bheemavaram, Bhilai, Bidar, Bilaspur, Chikkaballapur, Chittoor, Cuddallore, Cuttack, Dombivli, Goa, Guntur, Guwahati, Jaisalmer, Jodhpur, Kadapa, Kakinada, Kalyan, Kamareddy, Kancheepuram, Kanpur, Karimnagar, Khammam, Kolar, Kota, Kurnool, Ludhiana, Madanapalli, Madurai, Mahaboobnagar, Meerut, Nalgonda, Nashik, Navi Mumbai, Nellore, Nizamabad, Panchkula, Panipat, Patna, Pimpri-Chinchwad, Pondy, Raipur, Rajahmundry, Rajkot, Ramanagara, Ranchi, Rourkela, Salem, Secunderabad, Shimla, Silliguri, Srikakulam, Srikalahasti, Srinagar, Surat, Suryapeta, Thiruvananthapuram, Tirupati, Trichy, Tumakuru, Udaipur, Vadodara, Varanasi, Vasai, Vellore, Vijayawada, Visakhapatnam, Vizianagaram, Warangal.</p>
                <br></br>
                <a onClick={()=>setseeMore(false)}>see less</a>
            </div>
        )
    }

    const [healthConditions,setHealthConditions]=useState(true);

    const HealthConditionTrue=()=>{
        return (
            <SlideInRight durationMs={1500}>
                <div className="mediFlex mediConditions">                    
                    <img src={skin} alt ="skin" className="menuSize"/>
                    <img src={sexual} alt="sexual" className="menuSize"/>
                    <img src={weight} alt="weight" className="menuSize"/>
                    <img src={pain} alt="pain" className="menuSize"/>
                    <ArrowCircleRightTwoToneIcon className="nextsectionmedi" onClick={()=>{setHealthConditions(false)}}/>                    
                </div>
            </SlideInRight>
        )
    }
    const HealthConditionFalse=()=>{
        return (
            <SlideInLeft durationMs={1500}>
                <div className="mediFlex mediConditions">
                    <ArrowCircleLeftTwoToneIcon className="nextsectionmedi" onClick={()=>{setHealthConditions(true)}}/>                     
                    <img src={pain} alt ="pain" className="menuSize"/>
                    <img src={heart} alt="sexual" className="menuSize"/>
                    <img src={cough} alt="weight" className="menuSize"/>
                    <img src={daibetes} alt="pain" className="menuSize"/>                                       
                </div>
            </SlideInLeft>    
        )
    }

    const [categoriesMedi,setcategoriesMedi]=useState(true);
    const CategoriesMediTrue=()=>{
        console.log(categoriesMedi);
        return (
            <SlideInRight durationMs={1500}>
                <div className="mediFlex mediConditions">
                    <img src={baby} alt ="skin" className="menuSize"/>
                    <img src={fitness} alt="sexual" className="menuSize"/>
                    <img src={family} alt="weight" className="menuSize"/>
                    <img src={alternate} alt="pain" className="menuSize"/>
                    <ArrowCircleRightTwoToneIcon className="nextsectionmedi" onClick={()=>{setcategoriesMedi(false)}}/>
                </div>
            </SlideInRight>
        )
    }
    const CategoriesMediFalse=()=>{
        return (
            <SlideInLeft durationMs={1500}>
                <div className="mediFlex mediConditions">
                    <ArrowCircleLeftTwoToneIcon className="nextsectionmedi" onClick={()=>{setcategoriesMedi(true)}}/>
                    <img src={women} alt ="skin" className="menuSize"/>
                    <img src={health} alt="sexual" className="menuSize"/>
                    <img src={personal} alt="weight" className="menuSize"/>
                    <img src={device} alt="pain" className="menuSize"/>                    
                </div>
            </SlideInLeft>
        )
    }
    return (
        <div>
            <div className="mediFlex meditop">
                <div className = "medicineSearch">
                    <SearchIcon/>
                    <input placeholder="Search for medicines, health products and more"/>
                </div>            
                <button className="Medicinecart"><ShoppingCartIcon/> <span>VIEW CART</span></button>            
            </div>

            <div id="mediCarousel">
                <div className= "btnCarousel" onClick={BackwardCorousel}>
                    <ArrowBackIosIcon/>                    
                </div>
                <div className="rightBtn" onClick={ForwardCorousel}>
                    <ArrowForwardIosIcon/>
                </div>
                <SlideInLeft durationMs={1500}>                
                    <img src={imageURL}/>
                </SlideInLeft>                
            </div>

            <h2 className="mediMenu">Browse Medecines & Health Products</h2>
            <div className="displaymediMenu">
                <h2 className="mediSubHeading">Health condition</h2>
                {healthConditions?HealthConditionTrue():HealthConditionFalse()}
                <h2 className="mediSubHeading">Categories</h2>
                {categoriesMedi?CategoriesMediTrue():CategoriesMediFalse()}
            </div>
            <div>
                {/* <h1>Popular Products</h1> */}
            </div>
            <div className="mediFlex articleMedical">
                <div className="mediarticle">
                    <h3 className="articleHeading">INTRODUCING CONSULTATION DESK</h3>
                    <h3 className="articleDescription">Don't self medicate. Talk to expert. Consult a doctor in less than 2 minutes</h3>
                    <img src={article1} alt="chat with doctor"/>
                </div>
                <div className="mediarticle">
                    <h3 className="articleHeading">INTRODUCING FAST DELIVERY</h3>
                    <h3 className="articleDescription">Tired of waiting in a queue? Too weak to go down and buy medicines?</h3>
                    <img src={article2} alt="chat with doctor"/>
                </div>
            </div>
            <br></br>
            <br></br>
            <img id="bannerMedi" src={image2}/>
            <div>
                <h1>User review</h1>
                <div id="mediCarousel">
                <div className= "btnCarousel" onClick={ReviewBackwardCorousel}>
                    <ArrowBackIosIcon/>                    
                </div>
                <div className="rightBtn" onClick={ReviewForwardCorousel}>
                    <ArrowForwardIosIcon/>
                </div>
                <SlideInLeft durationMs={1500}>                
                    <img src={reviewImage}/>
                </SlideInLeft>                
            </div>
            </div>
            <div className="playstore mediFlex">
                <img src={practo}/>
                <div className="playstoreDetails">
                    <h2>Download the Practo app</h2>
                    <h3>Your home for health is one tap away.</h3>
                    
                    <h4>Book appointments, Order health products, Consult with a doctor online,Book health chekups, store health records & read health tips.</h4>
                    <br></br>
                    
                    <h4>Send the link to download the app</h4>
                    <div className="mediFlex">
                        <div className="medicineSearch">
                            <input type="tel"/>
                        </div>
                        <button className="Medicinecart">Send app Link</button>
                    </div>
                    <br></br>
                    <div className="playstoreLink">
                        <a href="https://app.appsflyer.com/com.practo.fabric?pid=Practo-order&c=homepage"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/play-store.3556fc81.png"/></a>
                        <a href="https://app.appsflyer.com/id953772015?pid=homepage&c=original"><img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/app-store.e30d53a6.png"/></a>
                    </div>                
                </div>
            </div>
            <div id="mediIntroduction">
                <h2> Order Medicines & Health Products Online: India 's most reliable Online Medical Store</h2>
                <p>Find and buy medicines online with Practo Pharmacy. Browse through prescription medicines, OTC products, health & wellness products on an online pharmacy that provides hassle free service across 100+ cities in India With an extensive catalogue of medicines and healthcare products provided on an extensive and easy to navigate destination for online medicine shopping, Practo Pharmacy provides added advantages which include:</p>
                <ul>
                    <li>Automated prescription refill: Set up scheduled refills for your online medicine orders and never worry about running out of your meds</li>
                    <li>Doorstep delivery: No more trips to the pharmacy, with on-time delivery of your medicines right to your doorstep</li>
                    <li>Medicine order history: No more scrolling through pages to find what you need. Just check your medicine order history and re-order</li>
                    <li> Exclusive offers and discounts: Enjoy cashbacks, flat discounts and other exclusive offers on your medicine orders</li>                    
                </ul>
                
                {seeMore?seeMoreIntroduction():<a onClick={()=>setseeMore(true)}>see more</a>}
            </div>
        </div>
    )
}