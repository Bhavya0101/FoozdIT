import React, { useLayoutEffect, useState, date } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Platform } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { db } from "../firebase"
import { doc, setDoc, updateDoc } from "@firebase/firestore"
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { name } from './NamePage';
import moment from "moment";
import Moment from "react-moment";


const BdayDatePage = () => {
  const navigation = useNavigation()

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    chosenDate: ''
  };

  const hideDatePicker = (date) => {
    setDatePickerVisibility(false);
    chosenDate: moment(date).format('DD-MM-YYYY');
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    console.log('Type of Date', typeof (date))
    hideDatePicker();
  };

  const updateBday = () => {
    updateDoc(doc(db, 'users', user.uid), {
      dateOfBirth: date
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
    <View style={{ flex: 1, backgroundColor: '#674389' }}>
      <View style={styles.textView}>
        <TouchableOpacity onPress={() => navigation.navigate('NamePage')}>
          <Ionicons name="md-chevron-back-outline" size={30} color="black" style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.text}>When is your{'\n'}Birthday?</Text>
      </View>




      <View style={styles.inputView}>
        <TouchableOpacity style={styles.textInput} onPress={showDatePicker}>
          <AntDesign name="calendar" size={30} color="black" style={styles.calendarIcon} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onChange={(date) => setBirthDate(date)}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={styles.dateView}>
            {birthDate ? moment(birthDate).format('   MMMM DD, YYYY') : '-'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GenderPage')}>
          <MaterialIcons name="navigate-next" size={30} color="black" style={styles.nextBtn} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BdayDatePage

const styles = StyleSheet.create({
  textView: {
    backgroundColor: "#674389",
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat_500Medium',
    alignItems: 'flex-start',
    fontSize: 32,
    marginLeft: 39,
    marginBottom: 25
  },
  backBtn: {
    marginLeft: '8%',
    paddingBottom: '10%',
    color: "#F9F9F9"
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
  textInput: {
    backgroundColor: '#F9F9F9',
    width: '80%',
    height: 50,
    borderRadius: 10,
    textAlign: "left",
    paddingLeft: '4%',
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignContent: "center"
  },
  calendarIcon: {
    paddingTop: '3%'
  },
  dateText: {
    paddingTop: '2%',
    paddingLeft: '5%',
    fontSize: 30,
    backgroundColor: '#D1CAD8'
  },
  dateView: {
    color: '#C0C0C0',
    fontSize: 25,
    marginTop: "3%"
  }
})
