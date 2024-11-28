import React from 'react'
import { Link } from 'react-router-dom'
import serviceBanners from '../../assets/service_banner.png';



const ServiceBanner = () => {
    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat h-[70VH]"
                style={{ backgroundImage: `url(${serviceBanners})` }}
            >
                <div className="container-xl">
                    {/* Content goes here */}
                </div>
            </div>
        </>
    )
}

export default ServiceBanner
