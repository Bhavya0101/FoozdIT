import { View, Text } from 'react-native';
import React, {createContext, useContext} from 'react';
import * as Google from "expo-google-app-auth";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
} from "@firebase/auth";
import { useState } from 'react/cjs/react.production.min';

const AuthContext = createContext({});


const config = {
    iosClientId: '694876637520-jt5vn37m8gp23cojb0b3k68967u7spmj.apps.googleusercontent.com',
    androidClientId: '694876637520-gpeq728r2gt21nnek90cpmus2mbh815k.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender" , "location"],
};

export const AuthProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const signInWithGoogle = async () => {
        await Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === "success") {
                // login ..
                const { idToken, accessToken } = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);


                await signInWithCredential(auth, credential);
            }

            return Promise.reject();
        }).catch(error => SpeechSynthesisErrorEvent(error));
    };


    return (
        <AuthContext.Provider 
            value={{
            user: null,
            signInWithGoogle,
            }}
        >
            {children}
        </AuthContext.Provider>
  );
};

export default function useAuth() {
    return useContext(AuthContext);
}