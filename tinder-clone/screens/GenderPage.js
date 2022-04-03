import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';



const GenderPage = () => {

    const PROP = [
        {
            key: 'samsung',
            text: 'Samsung',
        },
        {
            key: 'apple',
            text: 'Apple',
        },
        {
            key: 'motorola',
            text: 'Motorola',
        },
        {
            key: 'lenovo',
            text: 'Lenovo',
      },
    ];

    const navigation = useNavigation();
    const { user, logout } = useAuth();
        useLayoutEffect(() => {
            navigation.setOptions({
                headerShown: false,
            });
        }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#674389'}}>
        <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased `}>How Do You Identify ?</Text>
        <RadioButton PROP={PROP} />
        <Button
        style={tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`}
        title="Go On!!"
        onPress={()=> navigation.navigate('GenderPage')}
      />
      <Button style={tw`bottom-38`} title='Logout' onPress={logout}/>
    </View>
  )
}

export default GenderPage

