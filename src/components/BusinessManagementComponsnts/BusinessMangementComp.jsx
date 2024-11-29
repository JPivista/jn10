import React from 'react';
import serviceBanners from '../../assets/business-management-banner.png';

const BusinessManagementComp = () => {  // Replace this with the actual banner image URL

    return (
        <div className="space-y-12">
            {/* Banner Section */}
            <div
                className="bg-cover bg-center bg-no-repeat h-[70vh] flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${serviceBanners})` }}
            >
                <div className="container-xl text-center">
                    <h1 className='lg:text-6xl text-4xl text-white'>Business Management</h1>
                </div>
            </div>

            {/* First Content Section */}
            <div className="flex justify-center lg:p-0 p-4 ">
                <div className="container-xl lg:py-10 flex flex-col gap-4">
                    <div className=" space-y-12">
                        <div className="flex flex-col-reverse md:flex-row gap-6 items-center md:space-x-6">
                            <div className="flex-1">
                                <h1 className="text-3xl font-bold">Secure Your Future with</h1>
                                <h1 className="text-3xl font-bold">
                                    <span className="text-blue-500">JN10</span> <span className="text-green-500">Business</span> <span className="text-pink-500">Investments</span>
                                </h1>
                                <p className="mt-4 text-gray-600">Are you seeking secure investments with promising returns? Collaborate with JN10 Business Management by investing in our projects today!</p>
                                <button className="bg-sblue px-6 py-2 text-black rounded-xl mt-4 shadow-md">Invest Now</button>
                            </div>
                            <div className="flex-1 mt-6 md:mt-0">
                                <img src="/business-management/business-investment.png" alt="People discussing business investments" className="" />
                            </div>
                        </div>

                        {/* Second Content Section */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="flex-1 order-2 md:order-1 mt-6 md:mt-0">
                                <img src="/business-management/start-business.png" alt="People looking at investment documents" className="" />
                            </div>
                            <div className="flex-1 order-1 md:order-2">
                                <h1 className="text-3xl font-bold">Looking for Investments to Grow or</h1>
                                <h1 className="text-3xl font-bold">
                                    <span className="text-green-500">Start Your</span> <span className="text-blue-500">Business?</span>
                                </h1>
                                <p className="mt-4 text-gray-600">JN10 Business Management is here to help you connect with the right investors and secure the funding you need to scale or launch your business.</p>
                                <button className="bg-sblue px-6 py-2 text-black rounded-xl mt-4 shadow-md">Apply Now</button>
                            </div>
                        </div>

                        {/* Third Content Section */}
                        <div className="flex flex-col-reverse gap-6 md:flex-row items-center md:space-x-6">
                            <div className="flex-1">
                                <h1 className="text-3xl font-bold">
                                    <span className="text-green-500">Need Strong</span> <span className="text-blue-500">Leadership</span> <span className="text-pink-500">for Your Business?</span>
                                </h1>
                                <p className="mt-4 text-gray-600">Are you a business owner with resources but lacking a management system/head? The JN10 Business Management team can step in as your CEO, Director, or management partner to help your business thrive.</p>
                                <button className="bg-sblue px-6 py-2 text-black rounded-xl mt-4 shadow-md">Enquire Now</button>
                            </div>
                            <div className="flex-1 mt-6 md:mt-0">
                                <img src="/business-management/leadership-business.png" alt="Business meeting with leadership team" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section Below Banner */}
            <div className="flex justify-center lg:p-0 p-4">
                <div className="container-xl lg:pt-20 pt-10 flex flex-col gap-4">
                    {/* You can add additional content here */}
                </div>
            </div>
        </div>
    );
};

export default BusinessManagementComp;
