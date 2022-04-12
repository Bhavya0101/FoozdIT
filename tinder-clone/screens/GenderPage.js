import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import tw from 'twrnc';
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import useAuth from '../hooks/useAuth';
import { RadioButton } from 'react-native-paper';
import { db } from "../firebase"
import { doc, setDoc, updateDoc } from "@firebase/firestore"

const GenderPage = () => {

  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const [checked, setChecked] = React.useState('first');
  const incompleteForm = !checked;

  const updateGender = () => {
    updateDoc(doc(db,'users', user.uid), {
      gender: checked
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
      <Text style={tw`pt-35 items-center font-semibold px-3 text-white text-4xl antialiased`}>How Do You Identify ?</Text>
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
          onPress={() => setChecked('third')}
        />
        <Text>More</Text>
      </TouchableOpacity>

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

