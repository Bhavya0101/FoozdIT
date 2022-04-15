import React, {useLayoutEffect} from 'react';
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function IntroScreen() {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
        source={require("../assets/foozd_logo.png")}
        style={styles.logo}
        resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
      >

        <Text style={styles.title} >Are you ready to meet new foodies?</Text>
        <Text style={styles.text}>Sign In to continue</Text>
        <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate("LoginScreen") }>
            <Text style={styles.textSign}>Get Started</Text>
            <MaterialIcons
              name='navigate-next'
              color="#fff"
              size={20}
            />            
        </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#674389'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      backgroundColor: '#674389'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });