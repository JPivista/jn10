import React from 'react';
import { useParams } from 'react-router-dom';
import jobopeningsdata from '../../utils/jobopeningsdata';
import { generateSlug } from '../../utils/generateSlug';
import serviceBanners from '../../assets/service_banner.png';

const JobDetails = () => {
    const { slug } = useParams();

    const job = jobopeningsdata.find(
        (item) => generateSlug(item.text) === slug
    );

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-red-500">
                    Job not found! Please check the URL or go back.
                </h1>
            </div>
        );
    }

    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat h-[70VH]"
                style={{ backgroundImage: `url(${serviceBanners})` }}
            >
                <div className="container-xl">
                    {/* Content goes here */}
                </div>
            </div>
            <div className="flex justify-center lg:p-0 p-4">
                <div className="container-xl lg:py-10 flex flex-col gap-2 items-center">
                    {/* Job Title */}
                    <h1 className="text-3xl font-bold">{job.text}</h1>
                    <img src="/line-mulit-color.svg" alt="" className="h-2 object-contain" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                        {/* Job Description Section */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Job Description</h2>
                            <p className="mb-4">{job.desc}</p>

                        </div>

                        {/* Application Form Section */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Fill to apply</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded-xl"
                                            type="text"
                                            id="firstName"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded-xl"
                                            type="text"
                                            id="lastName"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="jobType">
                                            Job Type
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded-xl"
                                            type="text"
                                            id="jobType"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
                                            Phone Number
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded-xl"
                                            type="text"
                                            id="phoneNumber"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="jobTitle">
                                        Job Title
                                    </label>
                                    {/* Job Title Input - Disabled */}
                                    <input
                                        className="w-full border border-gray-300 p-2 rounded-xl bg-sblue"
                                        type="text"
                                        id="jobTitle"
                                        value={job.text}  // Use the job's title as the value
                                        disabled // Disable the input field
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full border border-gray-300 p-2 rounded-xl"
                                        type="email"
                                        id="email"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="yearsOfExperience">
                                            Years of Experience
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded-xl"
                                            type="text"
                                            id="yearsOfExperience"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="resume">
                                            Resume
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded-xl"
                                            type="text"
                                            id="resume"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="noticePeriod">
                                            Notice Period
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded-xl"
                                            type="text"
                                            id="noticePeriod"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="portfolioLink">
                                            Portfolio Link
                                        </label>
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded-xl"
                                            type="text"
                                            id="portfolioLink"
                                        />
                                    </div>
                                </div>
                                <div className="text-center pt-4">
                                    <button
                                        className="bg-sblue px-4 py-2 text-black rounded-xl"
                                        type="submit"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default JobDetails;
