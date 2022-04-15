import { useNavigation } from "@react-navigation/core";
import React, {useLayoutEffect} from "react";
import { View, Text, Button, ImageBackground, TouchableOpacity } from "react-native";
import useAuth from "../hooks/useAuth";
import tw from 'twrnc';
import HomeScreen from "./HomeScreen";


const LoginScreen = () => {
    const { signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View style={tw`flex-1 bg-[#674389]`}>
            {/* <ImageBackground 
                resizeMode='cover'
                style={tw`flex-1`}
                source={require('../pictures/Logo.png')}
            > */}
                <TouchableOpacity
                    style={[
                        tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`,
                        {marginHorizontal: "25%"},
                    ]}
                    onPress={signInWithGoogle} 
                >
                    <Text style={tw`font-semibold text-center`}>Login With Google</Text>
                </TouchableOpacity>

                

            {/* </ImageBackground> */}
        </View>
        
    );
};

export default LoginScreen;