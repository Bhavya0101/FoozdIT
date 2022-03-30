import { useNavigation } from "@react-navigation/core";
import React, {useLayoutEffect} from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import useAuth from "../hooks/useAuth";
import {TailwindProvider} from 'tailwind-rn';

const LoginScreen = () => {
    const { signInWithGoogle, loading} = useAuth();
    const navigation = useNavigation();
    const tailwind = useTailwind();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <View style={tailwind('flex-1')}>
            <ImageBackground 
                resizeMode='cover'
                style={tailwind('flex-1')}
                source={{uri: 'https://tinder.com/static/tinder.png'}}
            >
            </ImageBackground>
        </View>
        
    );
};

export default LoginScreen;