import React from 'react'
import "./Container1.scss"
import { PiArrowFatLinesDown } from "react-icons/pi";


function Container1() {
    return (
        <div className='container1'>
            <div className='container1Div'>
                <h1>Build Your Dream</h1>
                <p>Orzuyingizni Biz Bilan Quring</p>
                <div>
                    <a href="/">Pastaga <PiArrowFatLinesDown className='container1DivIcon' /></a>
                </div>
            </div>
        </div>
    )
}

export default Container1