import { useNavigation } from "@react-navigation/core";
import React, {useLayoutEffect} from "react";
import { View, Text, Button, ImageBackground, TouchableOpacity } from "react-native";
import useAuth from "../hooks/useAuth";
import tw from 'twrnc';

const MobileNumberVerification = () => {


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


  return (
    <View style={{flex: 1, backgroundColor: '#674389'}}>
        
    </View>
  )
}

export default MobileNumberVerification