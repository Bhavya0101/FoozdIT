import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { AntDesign, FontAwesomeIcon, Ionicons } from '@expo/vector-icons';
import AntIcon from "react-native-vector-icons/AntDesign";

const OtpEnterPage = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const [otp, setOtp] = useState(null);
  const incompleteForm = !otp;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);



  return (
    // <View style={{flex: 1, backgroundColor: '#674389'}}>
    //     <Text 
    //       style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased`}>Enter the Verification Code.</Text>
    //     <TextInput
    //       value={otp}
    //       onChangeText={text => setOtp(text)} 
    //       keyboardType="numeric"
    //       placeholder="Verification Code" 
    //       style={[tw`px-2 bg-white py-5 rounded-2xl mt-5 pt-5`, {marginHorizontal: "5%"},]}> 
    //     </TextInput>

    //     <TouchableOpacity
    //       disabled={incompleteForm}
    //       style={[
    //         tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`,
    //         incompleteForm ? tw`bg-gray-400` : tw`bg-white`,
    //               {marginHorizontal: "25%"},
    //             ]}
    //       >
    //         <Text style={tw`font-semibold text-center`}>Verify OTP</Text>
    //     </TouchableOpacity>


    // </View>
    <View style={styles.container}>
      <View style={styles.textView}>
        <TouchableOpacity onPress={() => navigation.navigate('MobileNumberVerification')}>
          <Ionicons name="md-chevron-back-outline" size={30} color="black" style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.text}>Enter the{'\n'}verification code</Text>
      </View>
      <View style={styles.inputView}>
        <OTPInputView
          style={{ width: '80%', height: 200, fontFamily: Montserrat_400Regular }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad41144
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code => {
            console.log(`Code is ${code}, you are good to go!`)
          })
          }
        />
      </View>
      <View style={styles.resendView}>
        <TouchableOpacity>
          <Text style={styles.resendText}> Resend verification code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NamePage')}>
          <MaterialIcons name="navigate-next" size={30} color="black" style={styles.nextBtn} />
        </TouchableOpacity>
      </View>
    </View>

  )

}

export default OtpEnterPage

const styles = StyleSheet.create({
  container: {
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
  resendView: {
    flex: 0.3,
    backgroundColor: "#674389",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '9%',
    marginTop: '2%',

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
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#F9F9F9",
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 3,
  },
  underlineStyleHighLighted: {
    borderColor: "#00ACC1",
  },
  resendText: {
    color: 'black',
    fontFamily: 'Montserrat_500Medium',
    color: '#D1CAD8'
  },
  backBtn: {
    marginLeft: '9%',
    paddingBottom: '10%',
    color: '#F9F9F9'
  }
})