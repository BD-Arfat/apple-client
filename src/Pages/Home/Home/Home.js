import React from 'react';
import Banner from '../Banner/Banner';
import BannerPhone from '../BannerPhone/BannerPhone';
import AboutPhone from '../AboutPhone/AboutPhone';
import PhoneCategory from '../../PhoneCategory/PhoneCategory';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BannerPhone/>
            <AboutPhone/>
            <PhoneCategory/>
            <Statistics/>
        </div>
    );
};

export default Home;