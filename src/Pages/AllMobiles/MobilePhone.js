import React from 'react';

const MobilePhone = ({mobile, setPhone,}) => {

    const { name, picture, RAM, ROM, OperatingSystem,Network, Price } = mobile

    return (
        <div className="card w-11/12 mx-auto bg-base-100 shadow-xl rounded-2xl border-2 border-white mt-5">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-success text-center">Name : {name}</h2>
                <div className='mt-2'>
                    <h3 className='text-lg font-bold text-center'>Network : {Network}</h3>
                </div>
            <div className=' flex justify-between mt-2 text-center'>
                <p>RAM : {RAM}</p>
                <p>ROM : {ROM}</p>
            </div>
            <div>
                <p className='text-lg font-bold text-success text-center'>Price : {Price}</p>
            </div>
            <div className='text-center mt-2 text-xl font-bold'>
                <h1><span className='text-success'>OperatingSystem</span> : {OperatingSystem}</h1>
            </div>
            </div>
            <div className="card-actions">
                <label onClick={()=> setPhone(mobile)} htmlFor="phoneBooking-modal" className="btn btn-warning btn-outline mb-9 w-56 lg:w-64 mx-auto">Order Now</label>
            </div>
        </div>
    );
};

export default MobilePhone;