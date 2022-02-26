import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return <div className="navbar-area">
        <nav className="nav-container">
            <div className="div-nav-left">
            <Link to ="/"><img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freelogovectors.net%2Fwp-content%2Fuploads%2F2019%2F02%2FPracto-logo.png&f=1&nofb=1'} alt="practo-logo" className='nav-logo' /></Link>
            </div>
            <div className="div-nav-middle">
                <div className="div-nav-middle-item">
                    <div><Link to ="/doctors" style={{textDecoration:"none" , color:"black"}}>Find Doctors</Link></div>
                    <div>Book an appointment</div>
                </div>
                <div className="div-nav-middle-item">
                    <div>Video Consult</div>
                    <div>Consult top doctors</div>
                </div>
                <div className="div-nav-middle-item">
                <div><Link to ="/medicines" style={{textDecoration:"none" , color:"black"}}>Medicines</Link></div>
                    <div>Practo Pharmacy</div>
                </div>
                <div className="div-nav-middle-item">
                    <div>Lab Tests</div>
                    <div>Book tests & checkup</div>
                </div>
                <div className="div-nav-middle-item">
                    <div>Surgeries</div>
                    <div>Expert surgical care</div>
                </div>
            </div>
            <div className="div-nav-right">
                <Menu>
                    <MenuButton className="nav-dropdown">
                        For Providers {<ChevronDownIcon />}
                    </MenuButton>
                    <MenuList>
                        <MenuItem className="nav-dropdown-item">
                            Practo Prime
                        </MenuItem>
                        <MenuItem className="nav-dropdown-item">
                            Software for providers
                        </MenuItem>
                        <MenuItem className="nav-dropdown-item">
                            List your practice for Free
                        </MenuItem>
                        <MenuItem className="nav-dropdown-item">
                            Corporate wellness
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton className="nav-dropdown">
                        Security & help {<ChevronDownIcon />}
                    </MenuButton>
                    <MenuList>
                        <MenuItem className="nav-dropdown-item">
                            Data security
                        </MenuItem>
                        <MenuItem className="nav-dropdown-item">
                            Help
                        </MenuItem>
                    </MenuList>
                </Menu>
               <Link to="/signup"> <Button className="btn-login">
                    Login / Signup
                </Button></Link>
            </div>
        </nav>
    </div>
}