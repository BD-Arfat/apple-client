import React from 'react';
import image from "../../../assest/bigstock-123084785.jpg"

const BannerPhone = () => {
    return (
        <div className=' flex justify-center -mt-32 mb-10'>
            <img src={image} className='rounded-xl' style={{width: 1200, height : 580}} alt="" />
        </div>
    );
};

export default BannerPhone;