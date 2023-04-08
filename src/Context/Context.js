import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Fifrebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const Context = ({children}) => {
    const [user, setUser] = useState(null)

    // user Register
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user Login 
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google
    const googleProvider = new GoogleAuthProvider();

    const googleUser = () =>{
        return signInWithPopup(auth, googleProvider)
    } 

    // updateUser
    const updateUserNmae = (userInfo) =>{
        return updateProfile(user, userInfo)
    }

    // singOut

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,register,googleUser,loginUser,logOut,updateUserNmae
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;