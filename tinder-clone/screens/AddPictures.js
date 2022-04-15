import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import useAuth from '../hooks/useAuth';
import { Entypo } from '@expo/vector-icons'; 

const AddPictures = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();
        useLayoutEffect(() => {
            navigation.setOptions({
                headerShown: false,
            });
        }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#F0D5ED'}}>
        <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xlr antialiased `}>Add Some Nice Photos</Text>
        <TouchableOpacity style={[
                        tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`,
                        {marginHorizontal: "25%"},
                    ]}>
          <Entypo name="plus" size={24} color="black" style={[tw`pt-1 `,{alignItems:"center"}]}  />
        </TouchableOpacity>

    </View>
  )
}

export default AddPictures

