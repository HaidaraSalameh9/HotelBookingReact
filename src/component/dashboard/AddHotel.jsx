import React, { useState, useEffect } from 'react';
import uploadArea from './../../assets/uploadArea.png';

const AddHotel = () => {

    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null
    });

    const [inputData, setInputData] = useState({
        roomType: "",
        pricePerNight: "",
        amenities: {
            "Free Wi-Fi": false,
            "Breakfast Included": false,
            "Airport Shuttle": false,
            "Swimming Pool": false,
        }
    });

    // 🧠 تنظيف الصور (memory leak fix)
    useEffect(() => {
        return () => {
            Object.values(images).forEach((file) => {
                if (file) URL.revokeObjectURL(file);
            });
        };
    }, [images]);

    // 📦 submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedAmenities = Object.keys(inputData.amenities)
            .filter(key => inputData.amenities[key]);

        console.log({
            ...inputData,
            amenities: selectedAmenities,
            images
        });
    };

    return (
        <div className='max-w-3xl mx-auto p-6'>

            {/* HEADER */}
            <h1 className='text-2xl font-semibold mb-2'>Add Hotel</h1>
            <p className='text-gray-500 mb-6'>
                Fill the details to add a new hotel
            </p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>

                {/* 🔥 IMAGES */}
                <div>
                    <h2 className='font-medium mb-3'>Upload Images</h2>

                    <div className='flex gap-4 flex-wrap'>
                        {Object.keys(images).map((key) => (
                            <label
                                key={key}
                                htmlFor={`hotelImage${key}`}
                                className='cursor-pointer'
                            >
                                <div className="relative">
                                    <img
                                        src={
                                            images[key]
                                                ? URL.createObjectURL(images[key])
                                                : uploadArea
                                        }
                                        className='w-24 h-24 object-cover rounded-lg border hover:opacity-80 transition'
                                    />

                                    {!images[key] && (
                                        <span className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
                                            Upload
                                        </span>
                                    )}
                                </div>

                                <input
                                    id={`hotelImage${key}`}
                                    type="file"
                                    accept='image/*'
                                    hidden
                                    onChange={(e) =>
                                        setImages(prev => ({
                                            ...prev,
                                            [key]: e.target.files[0]
                                        }))
                                    }
                                />
                            </label>
                        ))}
                    </div>
                </div>

                {/* 🛏 ROOM TYPE */}
                <div className='w-full flex flex-col sm:flex-row gap-4 mt-4'>
                    <div className='flex-1 max-w-xs'>
                        <p className='text-gray-600 font-bold'>Room Type</p>
                        <select
                            value={inputData.roomType}
                            onChange={(e) =>
                                setInputData(prev => ({
                                    ...prev,
                                    roomType: e.target.value
                                }))
                            }
                            className='border border-gray-300 mt-1 rounded p-2 w-full'
                        >
                            <option value="">Select Room Type</option>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="suite">Suite</option>
                        </select>
                    </div>
                </div>

                {/* 💰 PRICE */}
                <div>
                    <p className='text-gray-600 font-bold'>Price Per Night</p>
                    <input
                        type="number"
                        value={inputData.pricePerNight}
                        onChange={(e) =>
                            setInputData(prev => ({
                                ...prev,
                                pricePerNight: e.target.value
                            }))
                        }
                        className='border border-gray-300 w-32 px-3 py-2 rounded-lg outline-none'
                        placeholder='e.g. 120'
                    />
                </div>

                {/* 🧩 AMENITIES */}
                <div>
                    <h2 className='font-medium mb-2 text-gray-600'>Amenities</h2>

                    <div className='grid grid-cols-2 gap-2'>
                        {Object.keys(inputData.amenities).map((item) => (
                            <label key={item} className='flex items-center gap-2 cursor-pointer'>
                                <input
                                    type="checkbox"
                                    checked={inputData.amenities[item]}
                                    onChange={() =>
                                        setInputData(prev => ({
                                            ...prev,
                                            amenities: {
                                                ...prev.amenities,
                                                [item]: !prev.amenities[item]
                                            }
                                        }))
                                    }
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    className='bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold'
                >
                    Add Hotel
                </button>

            </form>
        </div>
    );
};

export default AddHotel;