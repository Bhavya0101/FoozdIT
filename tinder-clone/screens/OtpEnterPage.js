import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';

const OtpEnterPage = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [otp, setOtp] = useState(null);
    const incompleteForm = !otp;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#674389'}}>
        <Text 
          style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased`}>Enter the Verification Code.</Text>
        <TextInput
          value={otp}
          onChangeText={text => setOtp(text)} 
          keyboardType="numeric"
          placeholder="Verification Code" 
          style={[tw`px-2 bg-white py-5 rounded-2xl mt-5 pt-5`, {marginHorizontal: "5%"},]}> 
        </TextInput>

        <TouchableOpacity
          disabled={incompleteForm}
          style={[
            tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`,
            incompleteForm ? tw`bg-gray-400` : tw`bg-white`,
                  {marginHorizontal: "25%"},
                ]}
          >
            <Text style={tw`font-semibold text-center`}>Verify OTP</Text>
        </TouchableOpacity>
        
      
    </View>
  )
}

export default OtpEnterPage