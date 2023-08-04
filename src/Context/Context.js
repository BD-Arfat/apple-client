import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Fifrebase.config';

const auth = getAuth(app);

// export AuthContext
export const AuthContext = createContext();

const Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true) 

    // user Register
    const register = (email, password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user Login 
    const loginUser = (email, password) =>{
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google
    const googleProvider = new GoogleAuthProvider();

    const googleUser = () =>{
        setLoding(true)
        return signInWithPopup(auth, googleProvider);
    } 

    // updateUser
    const updateUserNmae = (userInfo) =>{
        return updateProfile(user, userInfo);
    }

    // singOut

    const logOut = () =>{
        return signOut(auth);
    }


    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoding(false);
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,register,googleUser,loginUser,logOut,updateUserNmae,loding
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;
