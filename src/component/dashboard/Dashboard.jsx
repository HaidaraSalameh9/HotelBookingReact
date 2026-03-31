import React from 'react';
import { FaBookOpen, FaDollarSign } from 'react-icons/fa';

const Dashboard = () => {
    const dashInfo =
    {
        totalBooking: "7",
        totalRevenue: "1500"
    };

    return (
        <div className='mt-4 p-4  '>
            <h1 className='text-2xl font-bold mb-2'>Hotel Booking Dashboard</h1>
            <p className="text-gray-600">
                Manage hotel listings, add new bookings, and keep track of all your
                reservations in one place.
            </p>
            <div className='flex gap-4 my-8'>
                <div className='bg-amber-100 border border-amber-500 rounded flex items-center gap-2 p-5'>
                    <FaBookOpen />
                    <div className='flex flex-col'>
                        <p>Total Booking</p>
                        <p className='font-bold text-center'>{dashInfo.totalBooking} Bookings</p>
                    </div>
                </div>
                <div className='bg-amber-100 border border-amber-500 rounded flex items-center gap-2 p-5'>
                    <FaDollarSign />
                    <div className='flex flex-col'>
                        <p>Total Booking</p>
                        <p className='font-bold text-center'>{dashInfo.totalRevenue}$</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
