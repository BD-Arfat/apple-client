import React, { useEffect, useState } from 'react';
import MobilePhone from './MobilePhone';
import PhoneModal from '../PhoneModal/PhoneModal';

const AllMobiles = () => {

    const [Mobiles, setMobile] = useState([]);
    const [phone, setPhone] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/phones")
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])

    return (
        <div>
            <div className='text-center md:mt-20 '>
                <h1 className=' mt-8 md:mt-8 text-2xl lg:text-5xl font-bold'>All Mobile phones in a row</h1>
                <p className='mt-4 px-6'>You can choice your favorite smart phone. phone here</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-20'>
                {
                    Mobiles.map(mobile => <MobilePhone
                        key={mobile._id}
                        mobile={mobile}
                        setPhone={setPhone}
                    ></MobilePhone>)
                }
            </div>
            <div>
                {phone &&
                    <PhoneModal
                        phone={phone}
                        setPhone={setPhone}
                    ></PhoneModal>
                }
            </div>
        </div>
    );
};

export default AllMobiles;