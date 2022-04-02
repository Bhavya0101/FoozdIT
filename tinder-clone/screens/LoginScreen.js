import { useNavigation } from "@react-navigation/core";
import React, {useLayoutEffect} from "react";
import { View, Text, Button, ImageBackground, TouchableOpacity } from "react-native";
import useAuth from "../hooks/useAuth";


const LoginScreen = () => {
    const { signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground 
                resizeMode='cover'
                style={{
                    flex: 1
                }}
                source={require('../Logo.png')}
            >
                <TouchableOpacity style={{position:'absolute',bottom: 100,width: 52, marginHorizontal: '25%', backgroundColor: 'white', borderBottomColor:100/2, overflow: "hidden", borderWidth: 3 }}>
                        <Text style={{textAlign: 'center'}}>Sign Up or Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        
    );
};

export default LoginScreen;