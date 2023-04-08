import React, { useContext } from 'react';
import logo from '../../assest/apple-removebg-preview.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const hendelLogout = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    const items = <>
        <li><Link className='font-bold' to={"/"}>Home</Link></li>
        <li><Link className='font-bold' to={"/Blog"}>Blog</Link></li>
        <li><Link className='font-bold' to={"/category"}>All Category</Link></li>
        <li><Link className='font-bold' to={"/dashboard"}>Dashboard</Link></li>
    </>

    return (
        <div className="navbar pt-4 w-full ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a className="normal-case text-xl"><img className='w-24 -mt-6 ' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <Link to={"/login"} onClick={hendelLogout} className='btn  lg:me-10 px-12 font-bold rounded-lg'>LogOut</Link>
                    :
                <Link to={"/login"} className="btn btn-warning rounded-lg text-white  lg:me-10 px-12 font-bold">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;