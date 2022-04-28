import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import tw, { create } from 'twrnc';
import useAuth from '../hooks/useAuth';
import { db } from "../firebase"
import { doc, setDoc } from "@firebase/firestore"
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";


const NamePage = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const [fName, setfName] = useState(null);
  const incompleteForm = !fName;

  const updateUserName = () => {
    setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
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
    <View style={{ flex: 1, backgroundColor: '#674389' }}>
      <View style={styles.textView}>
        <TouchableOpacity onPress={() => navigation.navigate('OtpEnterPage')}>
          <Ionicons name="md-chevron-back-outline" size={30} color="black" style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.text}>What is your{'\n'}name?</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={fName}
          onChangeText={setfName}
          placeholder="First Name"
          fontSize='22'
          placeholderTextColor={'#D1CAD8'}
          style={styles.textInput}>
        </TextInput>
      </View>
      <View style={styles.noticeView}>
        <Text style={styles.noticeText}>This is how your name will appear on Foozd.{'\n'}You won't be able to change it later.</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          disabled={incompleteForm}
          onPress={() => navigation.navigate('BdayDatePage')}
          style={styles.button}>
          <MaterialIcons name="navigate-next" size={30} color="#F9F9F9" />
        </TouchableOpacity>
      </View>



    </View>
  )
}

export default NamePage

const styles = StyleSheet.create({
  textView: {
    backgroundColor: "#674389",
    flex: 1,
    justifyContent: "flex-end",

  },
  inputView: {
    flex: 0.3,
    backgroundColor: "#674389",
    alignItems: "center",
    justifyContent: 'center',
  },
  btnView: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#674389',
    justifyContent: 'flex-end',
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ACC1',
    borderRadius: 100,
    marginRight: "9%",
    marginTop: '6%'
  },
  nextBtn: {
    alignContent: "center",
    color: '#D1CAD8'
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat_500Medium',
    alignItems: 'flex-start',
    fontSize: 32,
    marginLeft: 39,
    marginBottom: 25
  },
  textInput: {
    backgroundColor: '#F9F9F9',
    width: '80%',
    height: 50,
    borderRadius: 10,
    textAlign: "left",
    paddingLeft: '4%'
  },
  backBtn: {
    marginLeft: '8%',
    paddingBottom: '10%',
    color: "#F9F9F9"
  },
  noticeView: {
    flex: 0.3,
    backgroundColor: "#674389",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '9%',
    marginTop: '2%',
  },
  noticeText: {
    color: 'black',
    fontFamily: 'Montserrat_500Medium',
    color: '#D1CAD8',
    marginLeft: "1%"
  },
})