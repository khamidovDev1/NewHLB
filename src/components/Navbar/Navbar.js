import React, { useState } from 'react'
import "./Navbar.scss"
import Logo from "../../images/logo.png"
import { PiArrowFatLinesDown } from "react-icons/pi";
import { FaBars } from 'react-icons/fa';



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
                <li><a href="">Asosiy</a></li>
                <li><a href="">Malumotlar</a></li>
                <li><a href="">Biz Bilan Bog'lanish</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            <div className="navEnd">
                <a href="">Pastga <PiArrowFatLinesDown className='navEndIcon' /></a>
                <FaBars className='bars' onClick={siteBar} />
                <div className={`siteBar ${getBar ? 'visible' : ''}`}>
                    <ul>
                        <li>Asosiy</li>
                        <li>Malumotlar</li>
                        <li>aa</li>
                        <li>dsa</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar