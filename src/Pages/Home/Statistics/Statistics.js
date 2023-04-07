import React from 'react';

const Statistics = () => {
    return (
        <div className='mb-20'>
            <div className='text-center mt-16'>
                <h1 className='text-5xl font-bold'>Our Statistics</h1>
            </div>
            <div className='grid text-center mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='mt-14'>
                    <h1 className='text-5xl font-bold text-success'>5000+</h1>
                    <p className='text-lg '>Regular User</p>
                </div>
                <div className='mt-14'>
                    <h1 className='text-5xl font-bold'>89K</h1>
                    <p className='text-lg text-success '>Followers on social media</p>
                </div>
                <div className='mt-14'>
                    <h1 className='text-5xl text-success font-bold'>400+</h1>
                    <p className='text-lg '>Regular Seller</p>
                </div>
                <div className='mt-14'>
                    <h1 className='text-5xl text-success font-bold'>12+</h1>
                    <p className='text-lg '>Media Partner</p>
                </div>
                <div className='mt-14'>
                    <h1 className='text-5xl font-bold'>100K</h1>
                    <p className='text-lg text-success'>Mobile exchange</p>
                </div>
                <div className='mt-14'>
                    <h1 className='text-5xl text-success font-bold'>100+</h1>
                    <p className='text-lg '>Agents</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;