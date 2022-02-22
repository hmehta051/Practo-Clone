import "../styles/Login.css";
import {Link} from "react-router-dom";
import styled from 'styled-components';

export const Login = () =>{

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

    const StyledLinkLogin = styled(Link)`
    color: Black;
    text-decoration: none;

    &{
        color:#13BEF0;
        padding-bottom:1rem;
        border-bottom: 3px solid #13BEF0;
        text-decoration:none;
    }
    `;  

    return <div className="main-contain">
    Navbar
     <div className="second-contain">

         <div className="third-contain-top">
         <span><StyledLinkLogin to="/login">Login</StyledLinkLogin> </span>
         <span><StyledLink to="/signup">Register</StyledLink></span>
         </div>
         <hr/>
         <div id="third-contain-body">
             <div id="imgOnLeft"><img src="https://accounts.practo.com/static/images/illustration.png" width="400px"/></div>
             <div id="formOnRightLogin">
                 
            <div id="inp">Mobile Number/Email ID</div>
            <input type="text" name="mobile"  placeholder="Mobile Number/Email ID"  />
            <div id="inp">Password</div>
            <input type="password" name="password"  placeholder="Password" />
            <br/>
            <br/>
            <div className="check">
                <input type="checkbox" /><label>Remember me for 30 days</label>
            </div>
            <div className="check">
                <input type="checkbox" /><label>Login with OTP instead of password</label>
            </div>            
            <div className="button">Login</div>

             </div>
         </div>

     </div>
    Footer
    </div>
}