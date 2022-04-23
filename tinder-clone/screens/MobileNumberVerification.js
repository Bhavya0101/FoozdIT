import React, {useLayoutEffect, useState, useRef} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Pressable } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { Montserrat_500Medium, Montserrat_400Medium } from "@expo-google-fonts/montserrat";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import PhoneInput from "react-native-phone-number-input";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Ionicons} from '@expo/vector-icons'; 

const MobileNumberVerification = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [phoneNumber, setPhoneNumber] = useState(null);
    const incompleteForm = !phoneNumber1;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [phoneNumber1, setphoneNumber] = useState('');
    const phoneInput = useRef(null);
    const buttonPress = () => {
    Alert.alert(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
      <TouchableOpacity onPress={ () => navigation.navigate('LoginScreen')}>
        <Ionicons name="md-chevron-back-outline" size={30} color="black" style={styles.backBtn}/>
      </TouchableOpacity>
      <Text style={styles.text}>What is your{'\n'}phone number?</Text>
      </View>
      <View style={styles.numberButton}>
      <PhoneInput
        value={phoneNumber1}
        maxLength= {10}
        ref={phoneInput}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
        />
      <Text style={styles.noticeText}>This is to ensure that everyone on Foozd is real.{'\n'}This won’t be shown on your profile.</Text>
      </View>
      <View style={styles.btnView}>
        < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OtpEnterPage')}>
          <Text style={styles.continueText}></Text>
          <MaterialIcons
                name='navigate-next'
                color="#fff"
                size={40}
          style={styles.nextBtn} />
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity>
          disabled={incompleteForm}
          style={[
            tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`,
            incompleteForm ? tw`bg-gray-400` : tw`bg-white`,
                  {marginHorizontal: "25%"},
                ]}
          >
            <Text style={tw`font-semibold text-center`}>Send Verification Code</Text>
        </TouchableOpacity> */}
      
    </View>
    
  )
}

export default MobileNumberVerification

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#674389"
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat_500Medium',
    alignItems: 'flex-start',
    fontSize: 32,
    marginLeft: 39,
    marginBottom: 25
  },
  textView: {
    backgroundColor:'#674389',
    flex:1,
    justifyContent: "flex-end",
    
  },
  numberButton: {
    flex:0.6,
    backgroundColor: '#674389',
  },
  btnView: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#674389',
    justifyContent: 'flex-end',
  },
  TextInput: {
    marginLeft:39,
    backgroundColor: 'white',
    height: 50,
    width: 298,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
  },
  noticeText: {
    marginLeft: 39,
    marginTop: 13,
    fontFamily: 'Montserrat_400Medium',
    fontSize: 13,
    color: "#D1CAD8"
  },
  phoneContainer: {
    marginTop: 25,
    marginLeft:39,
    width: "80%",
    height: 50,
    borderRadius: 10
  },
  button: {
    width: 57,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ACC1',
    marginLeft: 39,
    padding:10,
    borderRadius: 100,
    marginRight: 30 
  },
  textInput: {
    paddingVertical: 0,
    borderRadius: 10
  },
  nextBtn: {
    alignContent: "center",
    paddingBottom: 50,
    color: '#D1CAD8'
  },
  backBtn: {
    marginLeft: '8%',
    paddingBottom: '10%',
    color: "#F9F9F9"
  }
})