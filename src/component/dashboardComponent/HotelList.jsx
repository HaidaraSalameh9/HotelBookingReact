import React from 'react';
import roomsData from '../../allRooms';

const HotelList = () => {

    return (
        <div className='max-w-6xl mx-auto p-6'>

            {/* TITLE */}
            <h1 className='text-3xl font-bold text-center mb-10'>
                Available Hotels
            </h1>

            {/* GRID */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                {roomsData.map((room) => (

                    <div
                        key={room._id}
                        className='bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden'
                    >

                        {/* IMAGE */}
                        <div className='relative'>
                            <img
                                src={room.images}
                                className='w-full h-48 object-cover'
                                alt=""
                            />

                            {/* STATUS BADGE */}
                            <span
                                className={`absolute top-3 right-3 px-3 py-1 text-xs rounded-full font-medium
                                ${room.isAvailable
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                    }`}
                            >
                                {room.isAvailable ? "Available" : "Not Available"}
                            </span>
                        </div>

                        {/* CONTENT */}
                        <div className='p-5 flex flex-col gap-3'>

                            {/* HOTEL NAME */}
                            <h2 className='text-lg font-semibold'>
                                {room.hotel}
                            </h2>

                            {/* CITY */}
                            <p className='text-gray-500 text-sm'>
                                📍 {room.city}
                            </p>

                            {/* ROOM TYPE + PRICE */}
                            <div className='flex justify-between items-center'>
                                <span className='text-sm text-gray-600'>
                                    {room.roomType}
                                </span>

                                <span className='text-orange-500 font-bold'>
                                    ${room.pricePerNight}
                                </span>
                            </div>

                            {/* ⭐ RATING */}
                            <div className='flex items-center gap-1 text-yellow-400'>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span key={index}>
                                        {index < Math.floor(room.rating) ? "★" : "☆"}
                                    </span>
                                ))}
                                <span className='text-gray-500 text-sm ml-2'>
                                    ({room.rating})
                                </span>
                            </div>



                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default HotelList;