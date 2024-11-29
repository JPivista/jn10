import React from 'react'

const JoinOurTeam = () => {
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4 ">
                <div className="container-xl lg:py-10 pt-10 flex flex-col gap-4">
                    <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-10 py-10 gap-5 items-center">
                        <div className="flex flex-col gap-6 lg:p-6 justify-center">
                            <p className="text-black lg:text-6xl font-semibold">
                                Welcome to <br />
                                JN10 Events
                            </p>
                            <p> At JN10 events, We provide multiple job opportunities, which maybe for us , our group of companies, partner, investors and clients</p>
                        </div>
                        <div>
                            <img src='/careers/careers-bond.png' alt='home banner' className='md:w-[80%] h-auto ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinOurTeam
