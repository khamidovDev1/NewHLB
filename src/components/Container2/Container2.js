import React from 'react'
import "./Container2.scss"
import { carData } from "../../staticData"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';


function Container2() {



    return (
        <div className='container2' id='container2'>
            <Swiper
                className='mySwiper'
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1.2}
                navigation
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
            >

                <div className='ss' id='container2'>
                    {
                        carData.map((item) => (
                            <div key={item.id} className='map'>
                                <SwiperSlide key={item.id} >
                                    <div className='mapHalf1'>
                                        <img src={item.img} alt="BYDpicture" />
                                    </div>
                                    <div className='mapHalf2'>
                                        <h1>{item.title}</h1>
                                        <p>Yurish masofasi: {item.distance}</p>
                                        <p>ElektroDvigatel: {item.power}</p>
                                        <p>Maksimal quvvati: {item.fullPower}</p>
                                        <p>Maksimal tezlik: {item.fullSpeed}</p>
                                        <p>Tezlashuv vaqti: {item.speedDuration}</p>
                                        <p>Batareya quvvati: {item.batteryPower}</p>
                                        <p>Zaryadlasnish: {item.chargeTime}</p>
                                        <div>
                                            <Link to="/" >Koproq Malumot Olish</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))
                    }

                </div >
            </Swiper >
        </div >
    )
}

export default Container2