import React, { useState, useEffect, createContext } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebase';

export const AuthContext = createContext();

export default function AuthContextProvider(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {


        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setIsAuthenticated(true)
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });



    })


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user }}>
            {props.children}
        </AuthContext.Provider>

    )
}
