import React, {useLayoutEffect} from 'react';
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { processFontFamily } from 'expo-font';

export default function IntroScreen() {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
      Montserrat_500Medium,
    });

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
        fontSize: 25,
        // fontWeight: 'bold',
        fontFamily:'Montserrat_500Medium',
    },
    text: {
        color: 'grey',
        marginTop:5,
        fontFamily:'Montserrat_500Medium',
        fontSize:14
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
        // fontWeight: 'bold',
        fontFamily:'Montserrat_500Medium',
    }
  });