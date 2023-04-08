import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Phone from './Phone';
import { Link } from 'react-router-dom';

const PhoneCategory = () => {

    const SomePhone = [
        {   "id" : 1,
            "Price": 165299,
            "Network": "2G, 3G, 4G, 6g, 12g",
            "RAM": "6 GB",
            "ROM": "256 GB",
            "Processor": "Hexa-core, up to 2.65 GHz",
            "OperatingSystem": "iOS 14",
            "Chipset": "Apple A14 Bionic (5 nm)",
            "picture": "https://i.ibb.co/vhg8tFf/iPhone14.jpg",
            "name": "iPhone 14"
          },{
            "id" : 2,
            "Price": 133499,
            "Network": "2G, 3G, 4G, 6g, 12g",
            "RAM": "6 GB",
            "ROM": "256 GB",
            "Processor": "Hexa-core, up to 2.65 GHz",
            "OperatingSystem": "iOS 14",
            "Chipset": "Apple A14 Bionic (5 nm)",
            "picture": "https://i.ibb.co/h8Mj72t/iPhone13.jpg",
            "name": "iPhone 13"
          },{
            "id" : 3,
            "Price": 124999,
            "Network": "2G, 3G, 4G, 6g, 12g",
            "RAM": "6 GB",
            "ROM": "128 GB",
            "Processor": "Hexa-core, up to 2.65 GHz",
            "OperatingSystem": "iOS 14",
            "Chipset": "Apple A14 Bionic (5 nm)",
            "picture":"https://i.ibb.co/nBZbK8X/iPhoen12.jpg",
            "name": "iPhone 12"
          },
    ]

    return (
        <div className='text-center w-11/12 mx-auto md:mt-20'>
            <h1 className='text-5xl font-bold'>Advertisement</h1>
            <p className='mt-2'>You can choice your favorite second hand phone from this attractive advertisement</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-20'>
               {
                SomePhone.map(phone => <Phone
                key={phone.id}
                phone ={phone}
                ></Phone>)
               }
            </div>
            <div className='mt-16 mb-10'>
                <Link to={"/category"} className='btn btn-warning btn-outline px-28'>See More</Link>
            </div>
        </div>
    );
};

export default PhoneCategory;