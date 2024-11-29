import React from 'react'
import serviceBanners from '../../assets/contact-us-banner.png';

const ContactUsComponents = () => {
    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat h-[70VH] flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${serviceBanners})` }}
            >
                <div className="container-xl text-center">
                    <h1 className='lg:text-6xl text-4xl text-white'>Contact Us</h1>
                </div>
            </div>
            <div className="flex justify-center lg:p-0 p-4 ">
                <div className="container-xl lg:pt-20 pt-10 flex flex-col gap-4">
                    <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-10 gap-5 items-center">
                        <div className="">
                            <img src="/contact-us.png" alt="Person using a smartphone and laptop" className="w-full h-full object-cover rounded-full shadow-lg" />
                        </div>
                        <div className="mt-10 md:mt-0 md:ml-10">
                            <form className="space-y-4">
                                <div className="flex space-x-4">
                                    <input type="text" placeholder="First Name" className="border border-gray-300 rounded-md p-2 w-full" />
                                    <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-md p-2 w-full" />
                                </div>
                                <div className="flex space-x-4">
                                    <input type="text" placeholder="Event Type" className="border border-gray-300 rounded-md p-2 w-full" />
                                    <input type="text" placeholder="Phone Number" className="border border-gray-300 rounded-md p-2 w-full" />
                                </div>
                                <input type="text" placeholder="City" className="border border-gray-300 rounded-md p-2 w-full" />
                                <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 w-full" />
                                <input type="text" placeholder="Promo Code" className="border border-gray-300 rounded-md p-2 w-full" />
                                <textarea placeholder="Detailed Requirement" className="border border-gray-300 rounded-md p-2 w-full h-32"></textarea>
                                <button type="submit" className="bg-gradient-to-r from-teal-400 to-blue-400 text-white rounded-md py-2 px-4 shadow-md">Contact Us</button>
                            </form>
                        </div>
                    </div>

                    {/* Head Office Section */}
                    {/* Google Map Embed Section */}
                    <div className="py-10 w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.521627806328!2d77.0199900751044!3d11.074447289093044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f91459d8f36f%3A0xf1c138031d98d342!2sJN10%20Events%20OPC%20PRIVATE%20LIMITED%20-%20Event%20Management%20Companies%20in%20Coimbatore%20%2F%20Wedding%20Planners%20in%20Coimbatore!5e0!3m2!1sen!2sin!4v1732904222808!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-md shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUsComponents
