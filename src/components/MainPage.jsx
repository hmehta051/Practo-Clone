import "../styles/MainPage.css";
import {Link} from "react-router-dom";

export const MainPage = () =>{
    return <div className="main-container">
    Navbar
     <div className="second-container">

         <div className="third-container-top">
        <Link to="/login"><span>Login</span></Link> 
         <Link to="/signup"><span>Register</span></Link>
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
            <br/>
            <div id="inp">Full Name</div>
            <input type="text" name="name"  placeholder="Full Name" />
            <div id="inp">Mobile Number</div>
            <input type="text" name="mobile"  placeholder="Mobile Number"  />
            <div id="inp">Create Password</div>
            <input type="password" name="password"  placeholder="Create password" />
            <br/>
            <br/>
            <div className="check">
                <input type="checkbox" /><label>Receive relevant offers and promotional communication from practo</label>
            </div>
            <p className="smallp">By signing up, I agree to <a className="smalla">terms</a></p>
            <div className="button">Register</div>

             </div>
         </div>

     </div>
    Footer
    </div>
}