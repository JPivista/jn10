import React from 'react'
import serviceBanners from '../../assets/service_banner.png';

const CareersBanner = () => {
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

export default CareersBanner
