import React from 'react';
import Navbar from '../../Laout/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const DashbordLaout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default DashbordLaout;