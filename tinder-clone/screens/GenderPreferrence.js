import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import useAuth from '../hooks/useAuth';

const GenderPreferrence = () => {

    var radio_props = [
        {label: 'Male', value: 0 },
        {label: 'Female', value: 1 },
        {label: 'Everyone', value: 2 }
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
        <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased `}>What is Your Ideal Foozdie ?</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
        />
        <Button
        style={tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`}
        title="Go On!!"
        onPress={()=> navigation.navigate('FoodProfile')}
      />
      <Button style={tw`bottom-38`} title='Logout' onPress={logout}/>
    </View>
  )
}

export default GenderPreferrence
