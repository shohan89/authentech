import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
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


    const authInfo = {
        user,
        createUser,
        updateName,
        verifyEmail,
        signInWithGoogle
    }
    return <AuthContext.Provider value={ authInfo }> { children } </AuthContext.Provider>
};

export default UserContext;