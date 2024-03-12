import React, { useState } from 'react'
import "./Navbar.scss"
import Logo from "../../images/logo.png"
import { PiArrowFatLinesDown } from "react-icons/pi";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';



function Navbar() {
    const [getBar, setBar] = useState(false)

    function siteBar() {
        setBar(!getBar)
    }
    return (
        <div className='navbar'>
            <div className="navLogo">
                <img src={Logo} alt="" />
            </div>
            <ul className='navMenu'>
                <li><Link to="container1" smooth={true} duration={600}>Asosiy</Link></li>
                <li><Link to="container2" smooth={true} duration={600}>Malumotlar</Link></li>
                <li><Link to="container3" smooth={true} duration={600}>Biz Bilan Bog'lanish</Link></li>
                <li><Link to="" smooth={true} duration={600}>FAQ</Link></li>
            </ul>
            <div className="navEnd">
                <Link to="container2" smooth={true} duration={600}>Pastga <PiArrowFatLinesDown /></Link>

                <FaBars className='bars' onClick={siteBar} />
                <div className={`siteBar ${getBar ? 'visible' : ''}`}>
                    <ul>
                        <li><Link to="container1" smooth={true} duration={600}>Asosiy</Link></li>
                        <li><Link to="container2" smooth={true} duration={600}>Malumotlar</Link></li>
                        <li><Link to="container3" smooth={true} duration={600}>Biz Bilan Bog'lanish</Link></li>
                        <li><Link to="" smooth={true} duration={600}>FAQ</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar