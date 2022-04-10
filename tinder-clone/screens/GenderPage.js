import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import tw from 'twrnc';
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import useAuth from '../hooks/useAuth';
import RadioButtonRN from 'radio-buttons-react-native';
import { db } from "../firebase"
import { doc, setDoc, updateDoc } from "@firebase/firestore"

const data = [
  {
    label: 'Male'
   },
   {
    label: 'Female'
   }
  ];

const GenderPage = () => {

  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const [gender, setGender] = useState(null);
  const incompleteForm = !gender;

  const updateGender = () => {
    updateDoc(doc(db,'users', user.uid), {
      Gender: gender
    }).then(() => {
      navigation.navigate('GenderPreferrence')
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
      <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased `}>What is Your Ideal Foozdie ?</Text>
      <RadioButtonRN
        value={gender}
        onChangeText={setGender}
        selectedBtn={(e) => console.log(e.label)}
        data={selectedBtn}
      />
      <TouchableOpacity
           
          style={[tw`items-center justify-center rounded-full w-156 h-36`]}
          onPress={updateGender} 
        >
        
        <Ionicons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>
  </View>
  )
}

export default GenderPage

