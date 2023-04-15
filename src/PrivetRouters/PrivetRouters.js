import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouters = ({children}) => {

    const {user, loding} = useContext(AuthContext);
    const location = useLocation()
    if(loding){
        return <button className="btn loading text-center">loading</button>
    }
    if(user){
        return children;
    }

    return (
        <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    );
};

export default PrivetRouters;