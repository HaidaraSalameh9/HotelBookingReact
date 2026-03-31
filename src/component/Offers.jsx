

import offer_1 from './../assets/offer_1.jpg';
import offer_2 from './../assets/offer_2.jpg';
import offer_3 from './../assets/offer_3.jpg';
import offer_4 from './../assets/offer_4.jpg';

const Offers = () => {
    const offers = [
        {
            _id: 1,
            title: "Sunny Escape Deal",
            description: "Get a free night stay and morning meal included",
            priceOff: 25,
            expiryDate: "Aug 31",
            image: offer_1
        },
        {
            _id: 2,
            title: "Couple's Special",
            description: "Relaxing package with spa services for two",
            priceOff: 20,
            expiryDate: "Sep 20",
            image: offer_2
        },
        {
            _id: 3,
            title: "Advance Luxury Saver",
            description: "Reserve two months early and enjoy discounts at top-class",
            priceOff: 30,
            expiryDate: "Sep 25",
            image: offer_3
        },
        {
            _id: 4,
            title: "Family Fun Package",
            description: "Enjoy theme park tickets and family-friendly amenities",
            priceOff: 15,
            expiryDate: "Oct 10",
            image: offer_4
        },
    ];

    return (
        <section className='py-12 px-6'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold'>Special Offers</h2>
                <p className='mt-2 text-gray-600 text-lg max-w-xl mx-auto'>
                    Discover limited-time deals to save more on your next trip.
                </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {offers.map((offer, index) => (
                    <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 py-2' key={index}>
                        <img className='h-48 w-full object-cover rounded-t-lg' src={offer.image} alt={offer.title} />
                        <div className='p-5 text-center'>
                            <h3 className=' text-lg text-[#e89755]'>{offer.title}</h3>
                            <p className='text-sm text-gray-500'>{offer.description}</p>
                        </div>
                        <p className='text-xl text-gray-500 mt-2 text-center'>Valid until {offer.expiryDate}</p>
                        <div className='flex justify-between items-center pt-4 px-2'>
                            <span className='font-bold'>Save {offer.priceOff}% today</span>
                            <button>View Offer</button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Offers;
