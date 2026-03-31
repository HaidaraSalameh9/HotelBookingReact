import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { FaLocationArrow } from 'react-icons/fa';
import { CgChevronDown } from "react-icons/cg";
import roomsData from './../allRooms.js';

const AllHotels = () => {

    const navigate = useNavigate();

    const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
        return (
            <label className='flex gap-3 items-center cursor-pointer text-sm mt-2'>
                <input type="checkbox" checked={selected} onChange={(e) => (e.target.checked, label)} />
                <span className='font-light select-none'>{label}</span>
            </label>
        );
    };
    const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
        return (
            <label className='flex gap-3 items-center cursor-pointer text-sm mt-2'>
                <input type="radio" checked={selected} name='sortOption' onChange={() => (label)} />
                <span className='font-light select-none'>{label}</span>
            </label>
        );
    };


    const roomFilter = [
        "Single Room",
        "Double Room",
        "Swimming Pool",
        "Family Suite"
    ];

    const priceFilter = [
        "0 to 500",
        "500 to 1000",
        "1000 to 2000",
        "2000 to 3000",
    ];

    const sortOption = [
        "Price Low To High",
        "Price High To Low",
        "Newest"
    ];




    const [openFilter, setOpenFilter] = useState(true);
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (!contentRef.current) return;

            if (window.innerWidth >= 1024) {
                // Desktop → دائمًا مفتوح
                setHeight(contentRef.current.scrollHeight);
            } else {
                // Mobile → حسب الحالة
                setHeight(openFilter ? contentRef.current.scrollHeight : 0);
            }
        };

        updateHeight(); // تشغيل أول مرة

        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, [openFilter]);

    return (
        <div className=''>

            <div className='px-6 flex flex-col-reverse lg:flex-row justify-between items-start gap-6 pt-35'>
                <div className='flex-1 mx-auto'>
                    {/* TITLE */}
                    <div className='flex flex-col items-center text-left mb-8'>
                        <h1 className='text-[#e89755] text-4xl md:text-2xl'>Hotels Room</h1>
                        <p className='text-gray-500 text-sm mt-2 max-w-170 text-center'>Discover comfortable and stylish rooms tailored to every traveler's need - from coze singles to luxurious suites.</p>
                    </div>
                    {/* ROOMS */}
                    <div className='flex flex-col gap-8'>
                        {roomsData.map((room) => (
                            <div
                                key={room._id}
                                className='flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4'
                            >

                                {/* IMAGE */}
                                <img
                                    onClick={() => navigate(`/rooms/${room._id}`)}
                                    src={room.images}
                                    className='w-full md:w-60 h-44 object-cover rounded-xl cursor-pointer'
                                />

                                {/* INFO */}
                                <div className='flex flex-col justify-between flex-1'>

                                    <div>
                                        <h2 className='text-xl font-semibold'>{room.hotel}</h2>
                                        <p className='text-gray-500'>{room.city}</p>

                                        {/* STARS */}
                                        <div className='flex text-yellow-400 mt-1'>
                                            {Array.from({ length: room.rating }).map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>

                                        {/* ADDRESS */}
                                        <div className='flex items-center gap-2 text-sm text-gray-500 mt-2'>
                                            <FaLocationArrow />
                                            <span>{room.address}</span>
                                        </div>

                                        {/* AMENITIES */}
                                        <div className='flex flex-wrap gap-2 mt-3'>
                                            {room.amenities.map((item, i) => (
                                                <span key={i} className='bg-gray-100 px-3 py-1 rounded-full text-xs'>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* PRICE */}
                                    <div className='flex justify-between items-center mt-4'>
                                        <p className='text-orange-500 font-bold text-lg'>
                                            ${room.pricePerNight} / night
                                        </p>

                                        <button
                                            onClick={() => navigate(`/rooms/${room._id}`)}

                                        >
                                            View
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* 🟢 RIGHT SIDE (FILTERS) */}
                <div className='w-80 bg-white shadow-md rounded-2xl p-3 h-fit mx-auto'>
                    {/* HEADER */}
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='font-semibold text-lg'>Filters</h3>
                        <h1
                            onClick={() => setOpenFilter(!openFilter)}
                            className="text-lg font-bold text-orange-500 lg:hidden  flex items-center gap-2 cursor-pointer"
                        >
                            {openFilter ? "Hide" : "Show"}

                            <CgChevronDown
                                className={` font-bold transition-transform duration-300 ${openFilter ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </h1>
                    </div>
                    <div
                        style={{ height: `${height}px` }}
                        className="overflow-hidden transition-all duration-500 ease-in-out"
                    >
                        <div ref={contentRef}>
                            <div className='px-5 pt-6'>
                                <p className='text-gray-500 pb-2'>Popular Filters</p>

                                {roomFilter.map((room, index) => (
                                    <CheckBox label={room} key={index} />
                                ))}
                            </div>
                            <div className='px-5 pt-6'>
                                <p className='text-gray-500 pb-2'>Price Range</p>

                                {priceFilter.map((price, index) => (
                                    <CheckBox label={price} key={index} />
                                ))}
                            </div>
                            <div className='px-5 pt-6'>
                                <p className='text-gray-500 pb-2'>Sort By</p>

                                {sortOption.map((sort, index) => (
                                    <RadioButton key={index} label={sort} />
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllHotels;
