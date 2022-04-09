import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { db } from "../firebase"
import { doc, setDoc } from "@firebase/firestore"
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const BdayDatePage = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [bday, setbday] = useState(null);
    const incompleteForm = !bday;

    const updateBday = () => {
      setDoc(doc(db,'users', user.uid), {
        id:user.uid,
        name: fName
      }).then(() => {
        navigation.navigate('BdayDatePage')
      })
      .catch((error) => {
        alert(error.message);
      })
    };

        useLayoutEffect(() => {
            navigation.setOptions({
                headerShown: false,
            });
        }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#674389'}}>
        <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased `}>When is Your Birthday?</Text>
        <TextInput placeholder="Birthday" style={[tw`px-2 bg-white py-5 rounded-2xl mt-5 pt-5`, {marginHorizontal: "5%"},]}> 
        </TextInput>
        <TouchableOpacity
           disabled={incompleteForm}
          style={[tw`items-center justify-center rounded-full w-156 h-36`]}
          onPress={updateBday}  
        >
        <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default BdayDatePage

