import React from 'react';
import allrooms_2 from './../assets/allrooms_2.jpg';
import allrooms_3 from './../assets/allrooms_3.jpg';
import { format } from 'date-fns';
const MyBooking = () => {
    const userBookingsData = [
        {
            _id: "bkg_01xa9c7e4bf1452a8def33a1",
            user: "walaa",
            image: allrooms_3,
            hotel: "UrbanStay Central",
            checkInDate: "2025-06-10T15:00:00.000Z",
            checkOutDate: "2025-06-12T11:00:00.000Z",
            totalPrice: 620,
            guests: 2,
            status: "confirmed",
            paymentMethod: "PayPal",
            isPaid: true,
            createdAt: "2025-06-05T12:18:32.101Z",
            updatedAt: "2025-06-06T08:40:00.000Z",
            __v: 0,
        },
        {
            _id: "bkg_02dcbb f9c3fa4317bbac79f9",
            user: "walaa",
            image: allrooms_2,
            hotel: "Garden Luxe Hotel",
            checkInDate: "2025-07-01T14:00:00.000Z",
            checkOutDate: "2025-07-03T11:00:00.000Z",
            totalPrice: 780,
            guests: 3,
            status: "cancelled",
            paymentMethod: "Cash",
            isPaid: false,
            createdAt: "2025-06-28T10:00:00.000Z",
            updatedAt: "2025-06-30T17:45:22.900Z",
            __v: 0,
        },
    ];
    return (
        <div className=' p-8 pt-32'>
            <h1 className='text-3xl font-bold mb-6 text-center'>My Bookings</h1>
            <div className=' overflow-x-auto'>
                <table className=' min-w-full bg-white shadow-md rounded-x overflow-hidden'>

                    <thead className='bg-gray-100'>
                        <tr className=' text-left text-gray-600 uppercase text-sm'>
                            <th className='py-3 px-4'>User</th>
                            <th className='py-3 px-4'>Image</th>
                            <th className='py-3 px-4'>Hotel</th>
                            <th className='py-3 px-4'>Guests</th>
                            <th className='py-3 px-4'>Check-In</th>
                            <th className='py-3 px-4'>Check-Out</th>
                            <th className='py-3 px-4'>Total Price</th>
                            <th className='py-3 px-4'>Status</th>
                            <th className='py-3 px-4'>Payment</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userBookingsData.map((booking) => (
                            <tr key={booking._id} className='border-t hover:bg-gray-50'>
                                <td className='py-3 px-4 font-medium'>{booking.user}</td>
                                <td className='py-3 px-4 font-medium'><img className='w-20 h16 object-cover rounded' src={booking.image} alt="" /></td>
                                <td className='py-3 px-4 font-medium'>{booking.hotel}</td>
                                <td className='py-3 px-4 font-medium'>{booking.guests}</td>
                                <td className='py-3 px-4 font-medium'>{format(new Date(booking.checkInDate), "yyyy,MM,dd")}</td>
                                <td className='py-3 px-4 font-medium'>{format(new Date(booking.checkOutDate), "yyyy,MM,dd")}</td>
                                <td className='py-3 px-4 font-medium'>{booking.totalPrice}$</td>
                                <td className='py-3 px-4 font-medium'>
                                    <span className={`px-2 py-1 rounded text-sm ${booking.status === "confirmed" ? "text-green-500" : "text-red-500"}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className='py-3 px-4'>
                                    <span className={`px-2 py-1 rounded text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                                        {booking.paymentMethod}({booking.isPaid ? "Paid" : "Unpaid"})
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBooking;
