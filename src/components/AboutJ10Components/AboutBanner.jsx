import React from 'react'


const AboutBanner = () => {
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4 ">
                <div className="container-xl lg:pt-20 pt-10 flex flex-col gap-4">
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
                </div>
            </div>
        </>
    )
}

export default AboutBanner
