import React from 'react';

const OurServicesLoop = () => {
    const data = [
        {
            id: 1,
            imageUrl: '/servicepage/engagement.jpeg',
            text: 'Engagement',
        },
        {
            id: 2,
            imageUrl: '/servicepage/wedding.jpeg',
            text: 'Wedding',
        },
        {
            id: 3,
            imageUrl: '/servicepage/Pre-wedding-ceremonies.png',
            text: 'Pre-wedding eremonies',
        },
        {
            id: 4,
            imageUrl: '/servicepage/Baby-Shower.jpeg',
            text: 'Baby Shower',
        },
        {
            id: 5,
            imageUrl: '/servicepage/Naming-Ceremony.jpeg',
            text: 'Naming Ceremony',
        },
        {
            id: 6,
            imageUrl: '/servicepage/Ear-piercing-Ceremony.png',
            text: 'Ear piercing Ceremony',
        },
        {
            id: 1,
            imageUrl: '/servicepage/engagement.jpeg',
            text: 'Engagement',
        },
        {
            id: 2,
            imageUrl: '/servicepage/wedding.jpeg',
            text: 'Wedding',
        },
        {
            id: 3,
            imageUrl: '/servicepage/Pre-wedding-ceremonies.png',
            text: 'Pre-wedding eremonies',
        },
        {
            id: 4,
            imageUrl: '/servicepage/Baby-Shower.jpeg',
            text: 'Baby Shower',
        },
        {
            id: 5,
            imageUrl: '/servicepage/Naming-Ceremony.jpeg',
            text: 'Naming Ceremony',
        },
        {
            id: 6,
            imageUrl: '/servicepage/Ear-piercing-Ceremony.png',
            text: 'Ear piercing Ceremony',
        },
    ];

    return (
        <>
            <div className="flex justify-center lg:p-0 p-4">
                <div className="container-xl lg:py-10 flex flex-col gap-2 items-center">
                    <h3 className="text-3xl font-bold">Our Services</h3>
                    <img src="line-mulit-color.svg" alt="" className="h-2 object-contain" />
                    <div className="w-full lg:p-4 lg:py-0 py-6">
                        {/* Grid for Services */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6 lg:py-10">
                            {data.map((item) => (
                                <div key={item.id} className="flex flex-col items-center">
                                    <div className="relative flex-col h-64 w-full p-0 justify-center shadow-md">
                                        <div className="p-0">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.text}
                                                className="w-full h-64 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 py-5 bg-white/25 backdrop-blur-md border border-white/20 w-full">
                                            <p className="text-center text-white">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurServicesLoop;
