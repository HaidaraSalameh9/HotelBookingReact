import React from 'react';
import Hero from '../component/Hero';
import HotelCard from '../component/HotelCard';
import Offers from '../component/Offers';
import Testimonials from '../component/Testimonials';


const Home = () => {
    return (
        <div>
            <Hero />
            <HotelCard />
            <Offers />
            <Testimonials />
        </div>
    );
};

export default Home;
