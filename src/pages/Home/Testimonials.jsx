import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';

const Testimonials = () => {
    const data = [
        {
            id: 1,
            imageUrl: "/home/testimonials/webe.png",
            text: "JN10 Events turned our corporate gala into an unforgettable night. The team's attention to detail, creative décor, and seamless execution were impeccable. We received countless compliments from our guests and look forward to working with them again!",
        },
        {
            id: 2,
            imageUrl: "/home/testimonials/webe.png",
            text: "JN10 Events turned our corporate gala into an unforgettable night. The team's attention to detail, creative décor, and seamless execution were impeccable. We received countless compliments from our guests and look forward to working with them again!",
        },
        {
            id: 3,
            imageUrl: "/home/testimonials/webe.png",
            text: "JN10 Events turned our corporate gala into an unforgettable night. The team's attention to detail, creative décor, and seamless execution were impeccable. We received countless compliments from our guests and look forward to working with them again!",
        },
        {
            id: 4,
            imageUrl: "/home/testimonials/webe.png",
            text: "JN10 Events turned our corporate gala into an unforgettable night. The team's attention to detail, creative décor, and seamless execution were impeccable. We received countless compliments from our guests and look forward to working with them again!",
        },
        {
            id: 5,
            imageUrl: "/home/testimonials/webe.png",
            text: "JN10 Events turned our corporate gala into an unforgettable night. The team's attention to detail, creative décor, and seamless execution were impeccable. We received countless compliments from our guests and look forward to working with them again!",
        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
                className="absolute left-[0px] top-1/2 transform -translate-y-1/2 rounded-full bg-sblue shadow-lg hover:bg-gray-300"
            >
                <FaArrowAltCircleLeft size={40} />
            </button>
        );
    };

    // Custom right arrow
    const CustomRightArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute right-[0px] top-1/2 transform -translate-y-1/2 rounded-full bg-sblue z-20 shadow-lg hover:bg-gray-300"
            >
                <FaArrowAltCircleRight size={40} />
            </button>
        );
    };
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4">
                <div className="container-xl lg:py-10 py-0 flex flex-col gap-2 items-center">
                    <h3 className="text-3xl font-bold">Testimonials</h3>
                    <img src="line-mulit-color.svg" alt="" className="h-2 object-contain" />

                    <div className="w-full py-8">
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            infinite={true}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list"
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}
                        >
                            {data.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center "
                                >
                                    <div className=' flex flex-col items-center w-full relative lg:p-3 p-1 '>
                                        <div className='flex flex-col lg:h-64 bg-sblue w-full items-center p-6 gap-8 justify-center shadow-md shadow-pink-400 rounded-md'>
                                            <div className='p-0'>
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.text}
                                                    className="w-24"
                                                />
                                            </div>
                                            <div className=''>
                                                <p className="text-center text-gray-700">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Testimonials
