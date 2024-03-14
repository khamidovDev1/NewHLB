import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { carData } from '../../staticData';


import 'swiper/scss';
import 'swiper/scss/pagination';

import './CarOfCard.scss';

export default function CarOfCard() {
    const divstyle = {
        backgroundColor: "blue"
    }
    return (

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
        >

            <div className='ss' style={divstyle} id='container2'>
                {
                    carData.map((item) => (
                        <div key={item.id} className='map'>
                            <SwiperSlide >
                                <div className='mapHalf1'>
                                    <img src={item.img} alt="" />
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
                                        <Link to="/batafsil" >Koproq Malumot Olish</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                    ))
                }

            </div >
        </Swiper >

    );
}
