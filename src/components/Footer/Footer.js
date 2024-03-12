import React, { useState } from 'react'
import "./Footer.scss"
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoChevronForwardSharp } from "react-icons/io5";


function Footer() {

    const [getValue, setValue] = useState('')

    function SendInformation(e) {
        e.preventDefault()
        setValue("")

    }







    return (
        <div className='footer'>
            <div>
                <div className='footer_div1'>
                    <div className='div1_text'>
                        <h1>Subscribe to the newsletter</h1>
                        <div className='inputDiv'>
                            <form action="" onSubmit={SendInformation}>
                                <input type="text" value={getValue} onChange={(e) => setValue(e.target.value)} placeholder='Enter Your Email' />
                                <button ><IoChevronForwardSharp className='btnIcon' /></button>
                            </form>
                        </div>
                        <div className='iconsDiv'>
                            <AiFillTwitterCircle className='icons' />
                            <FaFacebook className='icons' />
                            <TiSocialLinkedinCircular className='icons' />
                        </div>
                    </div>
                </div>
                <div className='footer_div2'>
                    <div>
                        <ul>
                            <h2>Buying & Selling</h2>
                            <li><a href="">Find a car</a></li>
                            <li><a href="">Listings by city</a></li>
                            <li><a href="">Sell your car</a></li>
                            <li><a href="">Compare side by side</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h2>Resource</h2>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Guides</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h2>About</h2>
                            <li><a href="">Company</a></li>
                            <li><a href="">Career</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer_footer'>
                <div className='footer_footerDiv'>
                    <div>
                        <p>© 2023 Car Leadership</p>
                    </div>
                    <div>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Trust & Safety</li>
                        <li>Law Enforcement</li>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer