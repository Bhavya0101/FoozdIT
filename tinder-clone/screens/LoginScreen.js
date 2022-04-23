import { useNavigation } from "@react-navigation/core";
import React, {useLayoutEffect} from "react";
import { View, Text, Button, ImageBackground, Image, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import useAuth from "../hooks/useAuth";
import { FontAwesome5,FontAwesome, Fontisto} from '@expo/vector-icons'; 
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
import { assets } from "./react-native.config";
  


const LoginScreen = () => {
    const { signInWithGoogle, loading } = useAuth();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
      });

    // if(!fontsLoaded) {
    //     return <AppLoading/>;
    // }

    // <ImageBackground 
    //             resizeMode='cover'
    //             style={tw`flex-1`}
    //             source={require('../pictures/Logo.png')}
    //         >
    //             <TouchableOpacity
    //                 style={[
    //                     tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`,
    //                     {marginHorizontal: "25%"},
    //                 ]}
    //                 onPress={signInWithGoogle} 
    //             >
    //                 <Text style={tw`font-semibold text-center`}>Login With Google</Text>
    //             </TouchableOpacity>

                

    //         </ImageBackground>

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require("../assets/foozd_logo.png")}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.loginButtons}>
                    <TouchableOpacity style={[styles.facebookBtn, styles.shadowProp]}> 
                        <FontAwesome5 name="facebook" size={23} color="white" />
                        <Text style={styles.facebookTxt}>
                            Sign Up with Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.googleBtn, styles.shadowProp]}
                        onPress={signInWithGoogle} 
                    > 
                        <Image source={require("../assets/googleIcon.png")} 
                        style={styles.googleIcon}
                        resizeMode='stretch'
                        />
                        <Text style={styles.googleTxt}>
                            Sign Up with Google
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mobileBtn, styles.shadowProp]} onPress={() => navigation.navigate("MobileNumberVerification")}> 
                        <Fontisto name="mobile" size={23} color="black" />
                        <Text style={styles.mobileTxt}>
                            Use mobile number
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#674389',
    },
    logo: {
        marginTop:200,
        width: height_logo,
        height: height_logo
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        backgroundColor: '#674389',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    loginButtons: {
        alignItems: 'flex-start',
        marginTop: 90,
        marginHorizontal: 10
    },
    facebookBtn: {
        width: 300,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#1877F2',
        alignItems: 'flex-start',
        paddingVertical: 13,
        paddingLeft: 11,
        paddingRight: 37
    },
    facebookTxt: {
        color : 'white',
        fontFamily: 'Montserrat_500Medium',
        // fontStyle: "normal",
        // fontWeight: "400",
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 1
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    googleBtn: {
        width: 300,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingVertical: 13,
        paddingLeft: 11,
        paddingRight: 37,
        marginTop: 15
    },
    googleTxt: {
        color : '#817E7E',
        fontFamily: 'Montserrat_500Medium',
        // fontStyle: "normal",
        // fontWeight: "400",
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 1
    },
    googleIcon:{
        height: 23,
        width:23
    },
    mobileBtn: {
        width: 300,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        alignItems: 'flex-start',
        paddingVertical: 13,
        paddingLeft: 11,
        paddingRight: 37,
        marginTop: 15
    },
    mobileTxt: {
        color : '#817E7E',
        fontFamily: 'Montserrat_500Medium',
        // fontStyle: "normal",
        // fontWeight: "400",
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 1
    },

});