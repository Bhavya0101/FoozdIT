import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { db } from "../firebase"
import { doc, setDoc } from "@firebase/firestore"
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import DatePicker from 'react-native-date-picker';



const BdayDatePage = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [bday, setbday] = useState(null);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
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
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker date={date} onDateChange={setDate} />

  
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

