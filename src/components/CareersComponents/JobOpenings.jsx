import React from 'react';
import { Link } from 'react-router-dom';
import jobopeningsdata from '../../utils/jobopeningsdata';
import { generateSlug } from '../../utils/generateSlug';

const JobOpenings = () => {
    return (
        <div className="font-sans bg-gray-50 py-12">
            <div className="container-xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-6">Job Openings</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {jobopeningsdata.map((item) => {
                        const slug = generateSlug(item.text);
                        console.log(`Generated Slug for ${item.text}:`, slug); // Log the generated slug

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center bg-gradient-to-r from-cyan-500 via-yellow-500 to-pink-500 rounded-lg p-0.5"
                            >
                                <div className="bg-white w-full rounded-md">
                                    <div className="p-8 flex flex-col h-60 justify-between">
                                        <div className='flex flex-col gap-4'>
                                            <h3 className="text-center text-black text-xl font-semibold">
                                                {item.text}
                                            </h3>
                                            <ul className="list-disc text-black pl-5 flex flex-col gap-2">
                                                <li>{item.desc}</li>
                                                <li>{item.desc2}</li>
                                            </ul>
                                        </div>
                                        <div className="text-center mt-4">
                                            <Link
                                                to={`/job-details/${slug}`}
                                                className="bg-cyan-500 px-4 py-2 text-white rounded-lg hover:bg-cyan-400"
                                            >
                                                View Openings
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default JobOpenings;
