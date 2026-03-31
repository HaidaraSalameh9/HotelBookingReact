import allrooms_1 from './assets/allrooms_1.jpg';
import allrooms_2 from './assets/allrooms_2.jpg';
import allrooms_3 from './assets/allrooms_3.jpg';
import allrooms_4 from './assets/allrooms_4.jpg';
import allrooms_5 from './assets/allrooms_5.jpg';

const roomsData = [
	{
		_id: 'a1f64c7197bc1234abcd9012',
		hotel: 'Alpine View Lodge',
		roomType: 'King Suite',
		city: 'Aspen',
		address: '112 Mountain Rd, Aspen, Colorado, USA',
		rating: 2,
		pricePerNight: 450,
		amenities: ['Balcony', 'Mountain View', 'High-Speed WiFi'], // Changed Sea View to Mountain View to match Aspen
		images: allrooms_1,
		isAvailable: true,
		createdAt: '2025-04-12T09:15:00.000Z',
		updatedAt: '2025-04-12T09:15:00.000Z',
		__v: 0,
	},
	{
		_id: 'b2e75d8298cd2345bcde0123',
		hotel: 'Garden Luxe Hotel',
		roomType: 'Standard Twin',
		city: 'Istanbul',
		address: '15 Meşrutiyet Cd, Beyoğlu, Istanbul, Turkey', // Corrected address for Istanbul
		rating: 4,
		pricePerNight: 280,
		amenities: ['TV', 'City View', 'Breakfast Included'],
		images: allrooms_2,
		isAvailable: false,
		createdAt: '2025-04-13T11:30:00.000Z',
		updatedAt: '2025-04-13T11:30:00.000Z',
		__v: 0,
	},
	{
		_id: 'c3d86e93a9de3456cdef1234',
		hotel: 'UrbanStay Central',
		roomType: 'Luxury Single',
		city: 'New York',
		address: '210 Lexington Ave, Manhattan, New York, USA',
		rating: 5,
		pricePerNight: 320,
		amenities: ['Work Desk', 'Garden Access', 'Air Conditioning'],
		images: allrooms_3,
		isAvailable: true,
		createdAt: '2025-04-14T14:45:00.000Z',
		updatedAt: '2025-04-14T14:45:00.000Z',
		__v: 0,
	},
	{
		_id: 'd4f97fa4b0ef4567defa2345',
		hotel: 'Lotus Blossom Resort', // Fixed hotel name (was "King Suite")
		roomType: 'Deluxe Family Room',
		city: 'Guilin',
		address: '88 Lotus Lake Rd, Guilin, Guangxi, China',
		rating: 5,
		pricePerNight: 390,
		amenities: ['Mini Bar', 'Mountain View', 'Free Parking'],
		images: allrooms_4,
		isAvailable: true,
		createdAt: '2025-06-22T09:00:00.000Z',
		updatedAt: '2025-06-22T09:00:00.000Z',
		__v: 0,
	},
];

export default roomsData;
