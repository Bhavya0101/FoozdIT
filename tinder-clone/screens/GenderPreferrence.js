import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import tw from 'twrnc';
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import useAuth from '../hooks/useAuth';
import { RadioButton } from 'react-native-paper';
import { db } from "../firebase"
import { doc, setDoc, updateDoc } from "@firebase/firestore"

const GenderPreferrence = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const [checked, setChecked] = React.useState('first');
  const incompleteForm = !checked;

  const genderPreference = () => {
    updateDoc(doc(db,'users', user.uid), {
      genderPreference: checked
    }).then(() => {
      navigation.navigate('FoodProfile')
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
      <Text style={tw`pt-35 items-center font-semibold px-3 text-white text-4xl antialiased`}>What is Your Ideal Foozdie ?</Text>
      <TouchableOpacity value='checked'>
        <RadioButton
          color="white"
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Male')}
        />
        <Text>Male</Text>
      </TouchableOpacity>

      <TouchableOpacity value='checked'>
        <RadioButton
          color="white"
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Female')}
        />
        <Text>Female</Text>
      </TouchableOpacity>

      <TouchableOpacity value='checked'>
        <RadioButton
          color="white"
          value="third"
          status={ checked === 'third' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Everyone')}
        />
        <Text>Everyone</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={[tw`items-center justify-center rounded-full w-156 h-36`]}
          onPress={genderPreference}
      >
        <Ionicons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>
  </View>
  )
}


export default GenderPreferrence
