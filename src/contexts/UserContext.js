import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [ user, setUser ] = useState({});

    // 1. Create User
    const createUser = ( email, password ) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 2. Update Name
    const updateName = name => {
        return updateProfile(auth.currentUser, { displayName: name });
    }

    // 3. Email Verify
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    // 4. googleSignIn
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    // 5. LogOut
    const logOut = () =>{
        return signOut(auth);
    }


    const authInfo = {
        user,
        createUser,
        updateName,
        verifyEmail,
        signInWithGoogle,
        logOut
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }

    },[] )

    return <AuthContext.Provider value={ authInfo }> { children } </AuthContext.Provider>
};

export default UserContext;