import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({ phone }) => {

    const { name, picture, RAM, ROM, OperatingSystem,Network } = phone

    return (
        <div className="card w-11/12 mx-auto bg-base-100 shadow-xl rounded-2xl border-2 border-white mt-5">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-success">Name : {name}</h2>
                <div className='mt-2'>
                    <h3 className='text-lg font-bold'>Network : {Network}</h3>
                </div>
            <div className=' flex justify-between mt-2'>
                <p>RAM : {RAM}</p>
                <p>ROM : {ROM}</p>
            </div>
            <div className='text-center mt-2 text-xl font-bold'>
                <h1>OperatingSystem : {OperatingSystem}</h1>
            </div>
            </div>
            <div className="card-actions">
                <Link className="btn btn-warning btn-outline mb-9 w-56 lg:w-64 mx-auto" to={"/category"}><button>Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Phone;