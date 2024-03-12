import React from 'react'
import "./Container1.scss"
import { PiArrowFatLinesDown } from "react-icons/pi";
import { Link } from 'react-scroll';


function Container1() {
    return (
        <div className='container1' id='container1'>
            <div className='container1Div'>
                <h1>Build Your Dream</h1>
                <p>Orzuyingizni Biz Bilan Quring</p>
                <div>
                    <Link to="container3" smooth={true} duration={600}>Pastga <PiArrowFatLinesDown /></Link>
                </div>
            </div>
        </div>
    )
}

export default Container1