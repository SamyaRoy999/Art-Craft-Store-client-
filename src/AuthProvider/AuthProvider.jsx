import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

import auth from "../Firebase/FirebaseConfig";




export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // Gooogle login 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // createUser password 
    const emailBaseLogin = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    
    }
    // sign in user 

    const signInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    //Update user
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    // user find
    useEffect(() => {
        const unSuvscrive = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        }); return () => unSuvscrive()
    }, [])
    console.log(user);

    // sign out 
    const userSignOut = () => {
        signOut(auth)
        setUser(null)
    }

    const allvalue = {
        user,
        googleLogin,
        githubLogin,
        emailBaseLogin,
        signInUser,
        userSignOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={allvalue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.any
}