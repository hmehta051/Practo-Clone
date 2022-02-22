import "./medicine.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useRef, useState } from "react";


//importing images
import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";

export const Medicine=()=>{
    //corousel
    const CorouselImage = [image1, image2, image3,image4]
    const index=useRef(0);    

    const [imageURL, setimageURL]=useState(CorouselImage[0]);

    useEffect(()=>{
        setInterval(()=>{
            if(index.current===CorouselImage.length-1)
                index.current=0
            else
                index.current=index.current+1

            setimageURL(CorouselImage[index.current]);
            console.log(index.current);
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
    return (
        <div>
            <div className="mediFlex meditop">
                <div id = "medicineSearch">
                    <SearchIcon/>
                    <input placeholder="Search for medicines, health products and more"/>
                </div>            
                <button id="Medicinecart"><ShoppingCartIcon/> <span>VIEW CART</span></button>            
            </div>

            <div id="mediCarousel">
                <div className= "btnCarousel" onClick={BackwardCorousel}>
                    <ArrowBackIosIcon/>                    
                </div>
                <div className="rightBtn" onClick={ForwardCorousel}>
                    <ArrowForwardIosIcon/>
                </div>                
                <img src={imageURL}/>                
            </div>

            <h2 className="mediMenu">Browse Medecines & Health Products</h2>
            <div className="displaymediMenu">
                <h2 className="mediSubHeading">Health condition</h2>
                <div className="mediFlex">
                    <img src = "https://www.practo.com/health-products/skin-care/l"/> 
                </div>
            </div>
        </div>
    )
}