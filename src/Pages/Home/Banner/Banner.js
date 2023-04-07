import React from 'react';

const Banner = () => {
    return (
        <div className="hero rounded-3xl bg-slate-800" style={{height: 650}}>
            <div className="hero-content text-center">
                <div className=" mt-7 lg:-mt-10">
                    <h1 className=" text-3xl md:text-5xl lg:text-7xl text-white font-bold">Welcome to Mobile <br /> Market</h1>
                    <p className="py-6 text-white">Heyy, you are in The biggest buying and selling market of mobile in your arena</p>
                    <div className="mt-7">
                        <button className="btn btn-success font-bold px-7 ">Get Started</button>
                        <button className=" btn btn-success btn-outline px-7  ms-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;