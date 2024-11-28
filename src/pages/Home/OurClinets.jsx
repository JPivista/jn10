import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import Carousel from 'react-multi-carousel'

const OurClinets = () => {
    const data = [
        {
            id: 1,
            imageUrl: "/home/our-clients/item-research-park.png",
            text: "First item",
        },
        {
            id: 2,
            imageUrl: "/home/our-clients/iitm.png",
            text: "Second item",
        },
        {
            id: 3,
            imageUrl: "/home/our-clients/bfg.png",
            text: "Third item",
        },
        {
            id: 4,
            imageUrl: "/home/our-clients/iitm.png",
            text: "Second item",
        },
        {
            id: 5,
            imageUrl: "/home/our-clients/bfg.png",
            text: "Third item",
        }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute left-[0px] top-1/2 transform -translate-y-1/2 rounded-full "
            >
                <FaLessThan size={30} />
            </button>
        );
    };

    // Custom right arrow
    const CustomRightArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute right-[0px] top-1/2 transform -translate-y-1/2 rounded-full z-20 "
            >
                <FaGreaterThan size={30} />
            </button>
        );
    };
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4">
                <div className="container-xl lg:py-10 flex flex-col gap-2 items-center">
                    <h3 className="text-3xl font-bold">Our Clients</h3>
                    <img src="line-mulit-color.svg" alt="" className="h-2 object-contain" />

                    <div className="w-full lg:p-4">
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            infinite={true}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            // itemClass="px-4"
                            dotListClass="custom-dot-list"
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}

                        >
                            {data.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <div className='p-0'>
                                        <img
                                            src={item.imageUrl}
                                            alt={item.text}
                                            className="w-full h-64 object-cover rounded-lg px-0"
                                        />
                                    </div>
                                    {/* <div className='absolute bottom-0 py-5 bg-white/30 backdrop-blur-md border border-white/20 w-full'>
                                        <p className="text-center text-gray-700">{item.text}</p>
                                    </div> */}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurClinets
