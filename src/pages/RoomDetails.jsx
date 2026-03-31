import React from 'react';
import { useParams } from 'react-router-dom';
import roomsData from './../allRooms.js';
import { FaLocationArrow, FaStar } from 'react-icons/fa';

const RoomDetails = () => {
    const { id } = useParams();
    const hotel = roomsData.find((room) => room._id === id);

    if (!hotel) {
        return <div className='text-center mt-20'>Hotel not found</div>;
    }

    return (
        <div className='max-w-6xl mx-auto px-6 pt-35 pb-12'>

            {/* 🔥 TOP SECTION */}
            <div className='grid lg:grid-cols-2 gap-10 items-center'>

                {/* IMAGE */}
                <img
                    src={hotel.images}
                    className='w-full h-87.5 object-cover rounded-2xl shadow-md'
                />

                {/* INFO */}
                <div>
                    <h1 className='text-3xl font-bold'>{hotel.hotel}</h1>

                    {/* CITY + RATING */}
                    <div className='flex items-center gap-4 mt-3 text-gray-500'>
                        <span>{hotel.city}</span>

                        <div className='flex text-yellow-400'>
                            {Array.from({ length: hotel.rating }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                    </div>

                    {/* ADDRESS */}
                    <div className='flex items-center gap-2 mt-3 text-gray-500'>
                        <FaLocationArrow />
                        <span>{hotel.address}</span>
                    </div>

                    {/* PRICE */}
                    <p className='text-2xl font-semibold text-orange-500 mt-6'>
                        ${hotel.pricePerNight} / night
                    </p>

                    {/* AVAILABILITY */}
                    <p className={`mt-2 font-medium ${hotel.isAvailable ? "text-green-600" : "text-red-500"}`}>
                        {hotel.isAvailable ? "Available now" : "Not available"}
                    </p>
                </div>
            </div>

            {/* 🔻 DETAILS */}
            <div className='grid md:grid-cols-2 gap-10 mt-12'>

                {/* ROOM TYPE */}
                <div className='bg-gray-50 p-6 rounded-xl'>
                    <h2 className='font-semibold mb-2'>Room Type</h2>
                    <p className='text-gray-600'>{hotel.roomType}</p>
                </div>

                {/* AMENITIES */}
                <div className='bg-gray-50 p-6 rounded-xl'>
                    <h2 className='font-semibold mb-3'>Amenities</h2>

                    <div className='flex flex-wrap gap-2'>
                        {hotel.amenities.map((item, i) => (
                            <span
                                key={i}
                                className='bg-white border px-3 py-1 rounded-full text-sm'
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 📍 MAP */}
            <div className='mt-14'>
                <h2 className='text-lg font-semibold mb-3'>Location</h2>

                <iframe
                    title='map'
                    src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.address)}&output=embed`}
                    className='w-full h-80 rounded-xl shadow'
                    loading='lazy'
                />
            </div>

        </div>
    );
};

export default RoomDetails;