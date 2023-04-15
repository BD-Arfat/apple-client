import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-hot-toast';

const Dashboard = () => {

    const { user } = useContext(AuthContext)

    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://apple-serve.vercel.app/bookings/?${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email]);

    const hendelDelete = id =>{
        const proceed = window.confirm('Do you really want to delete this product?')
        if(proceed){
            fetch(`https://apple-serve.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                toast.success('The product you want to delete has been successfully deleted')
                }
                const remaning = orders.filter(order => order._id !== id)
                setOrder(remaning)
            })
            
        }
    }

    return (
        <div>
            <div>
                <h1 className='text-center mt-10 lg:text-4xl font-bold'>My Orders</h1>
            </div>
            <div>
                <div className="overflow-x-auto w-full mt-16">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        
                                    </label>
                                </th>
                                <th>Products Name</th>
                                <th>User Name</th>
                                <th>Phone Number</th>
                                <th>Location</th>
                                <th>Confirm and pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                orders.map(order => <tr key={order._id}>
                                    <th>
                                        <label>
                                            <button onClick={()=> hendelDelete (order._id)} className='btn btn-error text-white px-5'>X</button>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask w-24 h-24">
                                                    <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.mobileName}</div>
                                                <div className="text-sm text-white font-bold">Price : {order.proce}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h1 className='text-lg font-bold text-white'>{order.useName}</h1>
                                        <br />
                                        <span className=" text-white badge-sm">Email : {order.email}</span>
                                    </td>
                                    <td className='font-bold text-white'>{order.phone}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">{order.location}</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-success text-white px-5 font-bold">CONFIRM YOUR ORDER</button>
                                    </th>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;