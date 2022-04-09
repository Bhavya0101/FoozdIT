import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import * as Google from "expo-google-app-auth";


import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
} from "@firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext({});


const config = {
    iosClientId: '694876637520-jt5vn37m8gp23cojb0b3k68967u7spmj.apps.googleusercontent.com',
    androidClientId: '694876637520-v230qsc05ct5qtl6jdtu2bkldgl1ik97.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender" , "location"],
};

export const AuthProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(
        () => 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is Logged In......
                setUser(user);
            } else {
                // Not Logged In...
                setUser(null);
            }
            setLoadingInitial(false);
        }),
        []
    );


    const logout = () => {
        setLoading(true);

        signOut(auth).catch((error) => setError(error))
        .finally(() => setLoading(false));
    };


    const signInWithGoogle = async () => {

        setLoading(true);

        await Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === "success") {
                // login ..
                const { idToken, accessToken } = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);

                await signInWithCredential(auth, credential)
            }
            return Promise.reject()
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };


    const memoedValue = useMemo(() => ({
        user,
        loading,
        error,
        signInWithGoogle,
        logout,
    }), [user, loading, error])

    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
  );
};

export default function useAuth() {
    return useContext(AuthContext);
}