import "../styles/MainPage.css";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";

const StyledLink = styled(Link)`
color: Black;
text-decoration: none;

&:hover{
    color:black;
    text-decoration:underline;
}

&:focus{
    color:#13BEF0;
    padding-bottom:1rem;
    border-bottom: 3px solid #13BEF0;
    text-decoration:none;
}
`;

const StyledLinkRegister = styled(Link)`
color: Black;
text-decoration: none;

&{
    color:#13BEF0;
    padding-bottom:1rem;
    border-bottom: 3px solid #13BEF0;
    text-decoration:none;
}
`;

export const MainPage = () =>{ //Signup function

  
    // the name would be saved in the store, so that it is accesible TO BE DONE LATER
    let [naam,setName]=useState("");
    let [email,setEmail]=useState("");
    let [mob,setMob]=useState(0);
    let [pass,setPass]=useState("");


    const registerUser = ()=>{
        axios.post("https://backendusers.herokuapp.com/register",{
            name:naam,
            email:email,
            password:pass,
            mobile:mob,
         })         
         .then(({data})=>{  
             alert(data.message);
             if(data.status==="success"){
                window.location.replace("http://localhost:3000/login");
             }
           })
           .catch((error)=>{
               alert(error);
           })
    }



    return <div className="main-container">
    Navbar
     <div className="second-container">

         <div className="third-container-top">
         <span><StyledLink to="/login">Login</StyledLink> </span>
         <span><StyledLinkRegister to="/signup">Register</StyledLinkRegister></span>
         </div>
         <hr/>
         <div id="third-container-body">
             <div id="imgOnLeft"><img src="https://accounts.practo.com/static/images/illustration.png" width="400px"/></div>
             <div id="formOnRight">
                 
             <div className="Heading">
                <h4>
                    Join Practo
                </h4>
                <p>Are you a doctor? <a className="here">Register Here</a></p>
            </div>
            <hr className="Line"/>
            
            <div id="inp">Full Name <span style={{fontSize:"10px",color:"red"}}>*</span></div>
            <input type="text" placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}}/>
            <div id="inp">Email <span style={{fontSize:"10px",color:"red"}}>*</span></div>
            <input type="email" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <div id="inp">Mobile Number <span style={{fontSize:"10px",color:"red"}}>*</span></div>
            <input type="text" placeholder="Enter 10 digit mobile number" onChange={(e)=>{setMob(e.target.value)}}/>
            <div id="inp">Create Password</div>
            <input type="password" placeholder="Create password" onChange={(e)=>{setPass(e.target.value)}}/>
            <br/>
            <div className="check">
                <input type="checkbox" /><label>Receive relevant offers and promotional communication from practo</label>
            </div>
            <p className="smallp">By signing up, I agree to <a className="smalla">terms</a></p>
            <div className="button" onClick={()=>{mob.length===10 ? registerUser():alert("Enter Valid User Details");}}>Register</div>

             </div>
         </div>

     </div>
    Footer
    </div>
}