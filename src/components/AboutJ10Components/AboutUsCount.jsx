import React from 'react'
import CountUp from 'react-countup'
import counterImage from '../../assets/circle-multi-color.svg'

const AboutUsCount = () => {
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4 ">
                <div className="container-xl flex flex-col gap-4">

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
                        <div class="relative  bg-gradient-to-r from-cyan-500 via-yellow-500 to-pink-500 rounded-lg p-0.5">
                            <div className='lg:h-48 flex flex-col items-center justify-center rounded-xl'>
                                <div className=" w-full ">
                                    <div className='text-black lg:h-48 bg-white w-full p-3 flex flex-col justify-center items-center gap-4 rounded-md'>
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
                        <div class="relative bg-gradient-to-r from-cyan-500 via-yellow-500 to-pink-500 rounded-lg p-0.5">
                            <div className='  lg:h-32 flex flex-col items-center justify-center rounded-xl '>
                                <div className=' w-full'>
                                    <div className='text-black lg:h-32 bg-white w-full p-3 flex flex-col justify-center items-center gap-4 rounded-md'>
                                        <h3 className="text-3xl font-bold">Our Vision</h3>

                                        <p className='text-black text-center'>
                                            Our mission is to expand our services worldwide,reaching clients and locations across the globe.We strive to ensure our presence is felt in every region.
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

export default AboutUsCount
