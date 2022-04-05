import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';


const MobileNumberVerification = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#674389'}}>
        <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased `}>Let's Get Your Phone Number Verified.</Text>
        <TextInput placeholder="Phone Number" style={[tw`px-2 bg-white py-5 rounded-2xl mt-5 pt-5`, {marginHorizontal: "5%"},]}> 
        </TextInput>
        <Button
        style={tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`}
        title="Send Verififcation Code"
        onPress={()=> navigation.navigate('OtpEnterPage')}
      />
      <Button style={tw`bottom-38`} title='Logout' onPress={logout}/>
    </View>
    
  )
}

export default MobileNumberVerification