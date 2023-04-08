import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-hot-toast';

const PhoneModal = ({ phone, setPhone }) => {
    const { name, picture, Price, } = phone;
    const { user } = useContext(AuthContext);

    const hendelAddToSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const user = {
            mobileName: name,
            useName: userName,
            email: email,
            phone: phone,
            location: location,
            proce: Price,
            image: picture
        }
        console.log(user)

        fetch("http://localhost:5000/bookings", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPhone(null);
                toast.success('Your booking is Successfull')
            })


    }

    return (
        <>
            <input type="checkbox" id="phoneBooking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="phoneBooking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold">Mobile Name : {name}</h3>
                    <div className=' justify-center flex mt-5'>
                        <img src={picture} alt="" className=' w-44' />
                    </div>
                    <h1 className='text-xl text-center font-bold mt-3 '>Price : {Price}</h1>
                    <p className="py-4 font-bold">Note: If you want to book this item please fiil up this form</p>
                    <form onSubmit={hendelAddToSubmit}>
                        <input type="text" name='userName' placeholder="Your Name" className="input input-bordered w-full mt-5 rounded-lg" />
                        <input type="email" disabled name='email' defaultValue={user.email} placeholder="Type here" className="input input-bordered w-full mt-5 rounded-lg" />
                        <input type="phone" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full mt-5 rounded-lg" />
                        <input type="location" name='location' placeholder="Your Location" className="input input-bordered w-full mt-5 rounded-lg" />
                        <button type='submit' className="btn w-full mt-4 rounded-lg">SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PhoneModal;