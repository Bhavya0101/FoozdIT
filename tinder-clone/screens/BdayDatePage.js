import React, {useLayoutEffect, useState, date} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Platform } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { db } from "../firebase"
import { doc, setDoc } from "@firebase/firestore"
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';



const BdayDatePage = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty'); 

    const onChange = (event, selectDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      let tempDate = new Date(currentDate)
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      setText(fDate)
      console.log(fDate)
    }

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    }


  


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

        <TouchableOpacity
          style={[tw`items-center justify-center rounded-full w-66 h-36`]}
          onPress={() => showMode('date')}
        >
          <Text>BirthDay</Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker 
            testID="dateTimePicer"
            value={date}
            mode = {mode}
            display = 'default'
            onChange={onChange}
          />
        )}
        
        <TouchableOpacity
           
          style={[tw`items-center justify-center rounded-full w-156 h-36`]}
          onPress={updateBday}  
        >
        <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default BdayDatePage

