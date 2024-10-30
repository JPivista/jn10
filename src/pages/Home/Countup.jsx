import React from 'react';
import CountUp from 'react-countup';

const Countup = () => {
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4 ">
                <div className="container-xl py-10 flex flex-col gap-4">
                    <div className="lg:grid lg:grid-cols-5 flex flex-col lg:gap-10 gap-5 items-center">
                        <div className='lg:flex hidden'>

                        </div>
                        <div className='bg-sblue h-32 flex flex-col items-center justify-center rounded-xl'>
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
                        <div className='bg-sblue h-32 flex flex-col items-center justify-center rounded-xl'>
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
                        <div className='bg-sblue h-32 flex flex-col items-center justify-center rounded-xl'>
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
                </div>
            </div>
        </>
    )
}

export default Countup
