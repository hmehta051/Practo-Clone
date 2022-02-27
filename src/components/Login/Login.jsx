import "./Login.css";
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
    padding-bottom:0.5rem;
    border-bottom: 3px solid #13BEF0;
    text-decoration:none;
}
`;

const StyledLinkLogin = styled(Link)`
color: Black;
text-decoration: none;

&{
    color:#13BEF0;
    padding-bottom:0.5rem;
    border-bottom: 3px solid #13BEF0;
    text-decoration:none;
}
`; 


export const Login = () =>{

    let [email,setEmail]=useState("");
    let [mob,setMob]=useState(0);
    let [pass,setPass]=useState("");

    const LoginUser = ()=>{
        
        axios.post("https://backendusers.herokuapp.com/login",{
            email,
            password:pass,
         }).then(({data})=>{  
            alert(data.message);
            if(data.status==="success"){
                window.location.replace("http://localhost:3000");
             }            
          })
    } 

    const LoginUserMob = ()=>{
        
        axios.post("https://backendusers.herokuapp.com/loginmobile",{
            password:pass,
            mobile:mob,
         }).then(({data})=>{  
            alert(data.message);
            if(data.status==="success"){
               window.location.replace("http://localhost:3000"); 
             }            
          })
           
     //     console.log("Mobile number Active"+email);
    }

    return <div className="main-contain">
     <div className="second-contain">

         <div className="third-contain-top">
         <span><StyledLinkLogin to="/login">Login</StyledLinkLogin> </span>
         <span><StyledLink to="/signup">Register</StyledLink></span>
         </div>
         <hr className="upLine"/>
         <div id="third-contain-body">
             <div id="imgOnLeft"><img src="https://accounts.practo.com/static/images/illustration.png" width="400px"/></div>
             <div id="formOnRightLogin">
                 
            <div id="inp">Mobile Number/Email ID <span style={{fontSize:"10px",color:"red"}}>*</span></div>
            <input placeholder="Mobile Number/Email ID" onChange={(e)=>{ 
               // console.log(typeof(e.target.value));
                if(e.target.value.length<=10){  
                setMob(e.target.value);
                }
                else{
                    setEmail(e.target.value);
                }
                }}/>
            <div id="inp">Password <span style={{fontSize:"10px",color:"red"}}>*</span></div>
            <input type="password" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}}/>
            <br/>
            <br/>
            <div className="checkLogin">
                <input type="checkbox" /><label>Remember me for 30 days</label>
            </div>
            <div className="checkLogin">
                <input type="checkbox" /><label>Login with OTP instead of password</label>
            </div>            
            <div className="button" onClick={()=>{
               // console.log(email);
               // console.log(mob);
                if(email!==""){
                     LoginUser();
                }
                else if(mob!==0){
                     LoginUserMob();
                }
            }}>Login</div>

             </div>
         </div>

     </div>
    </div>
}