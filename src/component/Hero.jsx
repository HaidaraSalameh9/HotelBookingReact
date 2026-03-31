import React from 'react';
import hotel_3 from './../assets/hotel_3.jpg';
const Hero = () => {
    const cities = [
        "Istanbul",
        "New York",
        "London",
        "Paris",
        "Beirut"
    ];
    return (
        <div style={{ backgroundImage: `url(${hotel_3})` }} className='relative flex flex-col items-center justify-center p-10 text-white  bg-no-repeat bg-center bg-cover h-screen'>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className='relative z-10'>
                <div className='text-center mb-6'>
                    <h2 className='text-[#e89755] text-4xl mb-3 font-bold'>Find Your Perfect Stay, Anywhere</h2>
                    <p className='text-2xl'>Discover top-rated hotels and exclusive deals around the world.
                        Book with ease and start your journey  today.
                    </p>
                    <button className='mt-5'>Book Now</button>
                </div>

                <section className="bg-white p-6 mx-auto max-w-xl rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        Book Your Stay
                    </h2>

                    <form className="space-y-4">
                        {/* Destination */}
                        <div>
                            <label htmlFor="destination" className="block text-sm font-medium text-gray-700" >
                                Destination
                            </label>
                            <input id='destination' list='cities' type="text" placeholder="e.g., Istanbul, Paris..." className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <datalist id='cities'>
                                {cities?.map((cite, index) => <option value={cite} key={index} />)}
                            </datalist>
                        </div>

                        {/* Check-in & Check-out */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="checkin" className="block text-sm font-medium text-gray-700" >
                                    Check-in
                                </label>
                                <input type="date" id="checkin" name='checkin' className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="checkout"
                                    className="block text-sm font-medium text-gray-700">
                                    Check-out
                                </label>
                                <input type="date" id="checkout" name='checkout' className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        {/* Guests & Rooms */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="guests" className="block text-sm font-medium text-gray-700"    >
                                    Guests
                                </label>
                                <input type="number" id="guests" name='guests' min="1" max="10" value="1" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="rooms" className="block text-sm font-medium text-gray-700"    >
                                    Rooms
                                </label>
                                <input type="number" id="rooms" name='rooms' min="1" max="5" value="1" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        {/* Button */}
                        <div className='text-center'>
                            <button type="submit" className='mt-3'>
                                Search Hotels
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Hero;
