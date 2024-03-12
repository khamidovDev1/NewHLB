import React from 'react'
import "./Container2.scss"
import { carData } from "../../staticData"

function Container2() {
    return (
        <div className='container2' id='container2'>

            {
                carData.map((item) => (
                    <div key={item.id} className='map'>
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
                            <button><a href="https://t.me/hlbmotors2023">Koproq Malumot Olish</a></button>
                        </div>
                    </div>

                ))
            }

        </div >
    )
}

export default Container2