import React, {useLayoutEffect, useState, date} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Platform } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { db } from "../firebase"
import { doc, setDoc, updateDoc } from "@firebase/firestore"
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { name } from './NamePage';



const BdayDatePage = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty'); 
    const incompleteForm = !text;

    const onChange = (event, selectedDate) => {
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
      updateDoc(doc(db,'users', user.uid), {
        dateOfBirth: text
      }).then(() => {
        navigation.navigate('GenderPage')
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
        <Text 
          value={text} 
          style={{fontWeight:'bold', fontSize: 20, flex:1, backgroundColor: '#674389', alignItems:'center', justifyContent:"center"}}>{text}</Text>
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

