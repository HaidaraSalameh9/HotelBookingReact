import { FaStar } from 'react-icons/fa';
import testimonial_1 from './../assets/testimonial_1.jpg';
import testimonial_2 from './../assets/testimonial_2.png';
import testimonial_3 from './../assets/testimonial_3.jpg';


const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Emma Rodriguez",
            address: "Barcelona, Spain",
            image: testimonial_1,
            rating: 5,
            review: "I've tried different hotel apps, but none matched the personal touch and attention to detail this service offers. Their handpicked hotel list is truly exceptional."
        },
        {
            id: 2,
            name: "Liam Johnson",
            address: "New York, USA",
            image: testimonial_2,
            rating: 4,
            review: "Everything went beyond my expectations. Booking was smooth, and the quality of the hotels was outstanding. Definitely recommending it!"
        },
        {
            id: 3,
            name: "Sophia Lee",
            address: "Seoul, South Korea",
            image: testimonial_3,
            rating: 5,
            review: "Fast and easy reservations, great customer service, and beautiful hotel choices. Will book again for sure!"
        }
    ];

    console.log(Array.from({ length: 5 }).map((_, i) => `${i} Haidara`));
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className='text-3xl font-bold text-[#e89755]'>What Guests Say</h2>
                <p className=' text-gray-600 mb-10 text-lg max-w-2xl mx-auto'>
                    Real  experiences from real travelers.
                    Discover wyh people love booking with us.
                </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((item) => (
                    <div key={item.id} className="p-6  text-left     bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 py-2">
                        {/* Image */}
                        <div className="flex items-center gap-4 mb-4">
                            <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                            <div>
                                {/* Name */}
                                <h3 className="text-md text-[#e89755]">{item.name}</h3>

                                {/* Address */}
                                <p className=" text-gray-500">{item.address}</p>
                            </div>
                        </div>



                        {/* Stars */}
                        <div className="flex items-center text-yellow-400 mb-2">
                            {Array.from({ length: item.rating }).map((_, i) => (
                                <span key={i}><FaStar /></span>
                            ))}
                        </div>

                        {/* Review */}
                        <p className="mt-4 text-gray-600 text-sm">{item.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
