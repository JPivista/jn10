import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4 ">
                <div className="container-xl lg:pt-20 py-10 flex flex-col gap-4">
                    <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-10 gap-5 items-center">
                        <div className="flex flex-col gap-6 lg:p-6 justify-center">
                            <p className="text-black lg:text-6xl font-semibold">
                                Welcome to <br />
                                JN10 Events
                            </p>
                            <p className="">
                                JN10 Events was commenced in the year 2018, as a man-power firm with a motto to bridge the gap between the employers and employees and to provide more job opportunities to the needy.
                            </p>
                            <div className="lg:grid lg:grid-cols-4 flex flex-col gap-5">
                                <div>
                                    <Link to="/contact-us" className='bg-sblue px-4 py-2 text-black rounded-xl'>
                                        Contact Us
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/book-now" className='bg-sblue px-4 py-2 text-black rounded-xl'>
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='/home-banner.png' alt='home banner' className='lg:w-[80%] h-auto ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
