import React from 'react';
import image from '../../../assest/images (1).jpeg'

const AboutPhone = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{width:1000, height:400}} src={image} className="rounded-xl shadow-2xl" />
                <div className=' ml-10 me-4'>
                    <h1 className="lg:text-6xl text-2xl font-bold">Sell and <span className=' text-success'>Buy</span> your mobile phone Easily</h1>
                    <p className="py-6">Heyy, you are in The biggest buying andselling market of mobile in your arena</p>
                    <div>
                    <button className="btn btn-success  px-10 font-bold">Sell</button>
                    <button className="btn btn-success btn-outline ms-4 px-10 font-bold">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPhone;