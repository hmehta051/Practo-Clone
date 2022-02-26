import "./medicineCategories.css";

import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import { useParams } from "react-router-dom";

export const MedecineCategories=()=>{
    const id=useParams();
    console.log(id.id);

    const Heading=(id)=>{
        switch(id.id){
            case "1": return (<h1>Baby</h1>)
            case "2": return (<h1>Fitness</h1>)
            case "3": return (<h1>Family</h1>)
            case "4": return (<h1>Alternate</h1>)
            case "5": return (<h1>Women</h1>)
            case "6": return (<h1>Health</h1>)
            case "7": return (<h1>Personal</h1>)
            case "8": return (<h1>Device</h1>)

            default: return (<h1>Wrong Option</h1>)
        }
    }

    return (
        <div>
            {/* navbar */}
            <div className="navCategoriesMedi">
               <div className="categoriesCare">
                   <h3>Family Care <ArrowDropDownTwoToneIcon className="categoriesArrow"/></h3>
                    <div className="categoriesContent">
                        <h3>Senior Care</h3>
                        <h3>Womens Care</h3>
                        <p>Femine Hygiene</p>
                        <p>Mother Care</p>
                    </div>
               </div>
               <div>
                   <h3 className="categoriesCare">Fitness & Wellness <ArrowDropDownTwoToneIcon className="categoriesArrow"/></h3>
                    <div div className = "categoriesContent">
                        <h3>Protien Supplements</h3>
                        <h3>Mass Gainers</h3>                        
                    </div>
               </div>
               <div>
                   <h3 className="categoriesCare">Skin Care  <ArrowDropDownTwoToneIcon className="categoriesArrow"/></h3>
                    <div div className = "categoriesContent" >
                        <h3>Acne Care</h3>
                        <h3>Body & Bath</h3>
                        <h3>Face Wash & Clensers</h3>
                        <h3>Skin Care Supplements</h3>
                    </div>
               </div>
               <div>
                   <h3 className="categoriesCare">Hair Care  <ArrowDropDownTwoToneIcon className="categoriesArrow"/></h3>
                    <div div className = "categoriesContent" >
                        <h3>Antidandruff</h3>
                        <h3>Antihairloss</h3>                        
                    </div>
               </div>
               <div>
                   <h3 className="categoriesCare">Lip Care  <ArrowDropDownTwoToneIcon className="categoriesArrow"/></h3>
                    <div className = "categoriesContent" >
                        <h3>Lip Balms</h3>                        
                    </div>
               </div>
               <div>
                   <h3 className="categoriesCare">Sexual Wellness  <ArrowDropDownTwoToneIcon className="categoriesArrow"/></h3>
                    <div div className = "categoriesContent" >
                        <h3>Condoms</h3>
                    </div>
               </div>
               <div>
                   <h3 className = "categoriesCare" > Women 's Care <ArrowDropDownTwoToneIcon className="categoriesArrow"/></h3>
                    <div div className = "categoriesContent" >
                        <h3>Female Hygiene</h3>
                        <h3>Mother Care</h3>
                    </div>
               </div>
               <div>
                   <h3 className="categoriesCare">Baby Care  <ArrowDropDownTwoToneIcon className="categoriesArrow"/></h3>
                    <div div className = "categoriesContent" >
                        <h3>Baby Bath</h3>
                        <h3>Daiper and wipes</h3>
                    </div>
               </div>
            </div>

            <div id="DisplayingSection">
                <div className="SectioncontaingCategories">
                    <h3 id="familyCare"><ArrowForwardIosTwoToneIcon/> Family Care</h3>
                    <div>
                        <h4>Senior Care</h4>
                        <h4>Women Care <ArrowForwardIosTwoToneIcon/></h4>
                    </div>                    
                    <h3 id="FWness"><ArrowForwardIosTwoToneIcon/> Fitness & Wellness</h3>
                    <div>
                        <h4>Protien Supllements</h4>
                        <h4>Mass Gainers</h4>
                    </div>
                    <h3 id="skinCare"><ArrowForwardIosTwoToneIcon/> Skin Care</h3>
                    <div>
                        <h4>Acne Care</h4>
                        <h4>Body and Bath</h4>
                        <h4>Face wash and clensers</h4>
                        <h4>Skin care supplements</h4>
                    </div>
                    <h3 id="hairCare"><ArrowForwardIosTwoToneIcon/> Hair Care</h3>
                    <div>
                        <h4>Antidandruff</h4>
                        <h4>Antihairloss</h4>
                    </div>
                    <h3 id="lipCare"><ArrowForwardIosTwoToneIcon/> Lip Care</h3>
                    <div>
                        <h4>Lip Bam</h4>
                    </div>
                    <h3 id="sexualWellness"><ArrowForwardIosTwoToneIcon/> Sexual Wellness</h3>
                    <div>
                        <h4>Condoms</h4>
                    </div>
                    <h3 id="womenCare"><ArrowForwardIosTwoToneIcon/> Women Care</h3>
                    <div>
                        <h4>Female Hygiene</h4>
                        <h4>Mother Care</h4>
                    </div>
                    <h3 id="babyCare"><ArrowForwardIosTwoToneIcon/> Baby Care</h3>
                    <div>
                        <h4>Baby Bath</h4>
                        <h4>Diper and wipes</h4>
                    </div>
                </div>
                <div className="SectionDisplaying">
                    <h1>Health Condition{Heading(id)}</h1>

                </div>
            </div>
        </div>
    )
}