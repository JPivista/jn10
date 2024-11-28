import React from 'react'
import CountUp from 'react-countup'
import counterImage from '../../assets/circle-multi-color.svg'

const AboutBanner = () => {
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
                            <p>JN10 Events was commenced in the year 2018, as a man-power firm with a motto to bridge the gap between the employers and employees and to provide more job opportunities to the needy.</p>
                            <p>Slowly, we started providing man-power support to various sectors such as decorators, caterers, photographers, fabricators, hotels, industries,companies, hospitals, and so on.</p>
                            <p>Impressed by our services and resource management, Clients requested us to host the entire event instead of just providing man-power.Then we began to host A-Z events like weddings, birthday parties, corporate events and so forth.</p>
                            <p>Now we have the potentiality of hosting all kinds of events.Initially, our journey was embarked upon in Coimbatore and gradually we extended our services in other cities. Now we provide services PAN Tamil Nadu and neighboring states with headquarters at Coimbatore and branches in Chennai.</p>
                            <p>Additionally, we’ve organized couple of events in North India as well. Give us your ideas and tell us your budget, we are here to customize and cater your needs with 100% satisfaction.</p>
                            <p>Our business runs as a Proprietorship firm entitled as “JN10 EVENTS” and also as a One Person Company known by “JN10 EVENTS (OPC) Pvt. Ltd.” Incorporated in July 2023.</p>
                        </div>
                        <div>
                            <img src='/about-j10-banner.png' alt='home banner' className='lg:w-[90%] h-auto ' />
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className=' w-56 h-32 flex flex-col items-center justify-center rounded-xl'
                            style={{ backgroundImage: `url(${counterImage})` }}>
                            <CountUp
                                delay={2}
                                end={6}
                                start
                                suffix='+'
                                className='text-2xl font-bold text-black' />
                            <p className='text-black'>
                                Years of Experience
                            </p>
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-5 flex flex-col lg:gap-10 gap-5 items-center">
                        <div className='lg:flex hidden'>
                        </div>
                        <div className='bg-sblue lg:w-auto w-[70%] h-32 flex flex-col items-center justify-center rounded-xl'>
                            <CountUp
                                delay={2}
                                end={500}
                                start
                                suffix='+'
                                className='text-2xl font-bold text-black' />
                            <p className='text-black'>
                                Completed Projects
                            </p>
                        </div>
                        <div className='bg-sblue lg:w-auto w-[70%] h-32 flex flex-col items-center justify-center rounded-xl'>
                            <CountUp
                                delay={2}
                                end={50}
                                start
                                suffix='+'
                                className='text-2xl font-bold text-black' />
                            <p className='text-black'>
                                Experienced Team
                            </p>
                        </div>
                        <div className='bg-sblue lg:w-auto w-[70%] h-32 flex flex-col items-center justify-center rounded-xl'>
                            <CountUp
                                delay={2}
                                end={100}
                                start
                                suffix='%'
                                className='text-2xl font-bold text-black' />
                            <p className='text-black'>
                                Happy Clients
                            </p>
                        </div>
                        <div className='flex '>
                        </div>
                    </div>

                    <div className='py-10'>
                        <div class="relative p-1 rounded-lg bg-gradient-to-r from-cyan-500 via-yellow-500 to-pink-500 ">
                            <div className='  lg:h-48 flex flex-col items-center justify-center rounded-xl'>
                                <div className=' w-full'>
                                    <div className='text-black lg:h-48 bg-white w-full p-3 flex flex-col justify-center items-center gap-4'>
                                        <h3 className="text-3xl font-bold">Our Clients</h3>

                                        <p className='text-black text-center'>
                                            We aim to deliver exceptional, comprehensive event services that cover every detail from start to finish.Our objective is to achieve a significant milestone by successfully completing over 5,000 events.This ambitious target is set for December 2025, reflecting our commitment to excellence.We're dedicated to making each event a remarkable success, contributing to this achievement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:pb-10'>
                        <div class="relative p-1 rounded-lg bg-gradient-to-r from-cyan-500 via-yellow-500 to-pink-500 ">
                            <div className='  lg:h-32 flex flex-col items-center justify-center rounded-xl'>
                                <div className=' w-full'>
                                    <div className='text-black lg:h-32 bg-white w-full p-3 flex flex-col justify-center items-center gap-4'>
                                        <h3 className="text-3xl font-bold">Our Vision</h3>

                                        <p className='text-black text-center'>
                                            Our mission is to expand our services worldwide,reaching clients and locations across the globe. We strive to ensure our presence is felt in every region.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner
