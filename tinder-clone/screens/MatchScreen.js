import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/core";
import tw from 'twrnc'; 
import HomeScreen from './HomeScreen';

const MatchScreen = () => {
    const navigation = useNavigation();
    const {params} = useRoute();

    const { loggedInProfile, userSwiped } = params;



  return (
    <View style={[tw`h-full pt-20`,{opacity: 0.89, backgroundColor: '#674389'}]}>
      <View  style={[tw`justify-center  px-10 pt-20`]}>
          <Image source={{uri: userSwiped.picture1}} />
      </View>

      <Text style={[tw`text-wite text-center mt-5`]}>
            You and  {userSwiped.name} ave Liked  Each Other.
      </Text>

      <View style={[tw`flex-row justify-evenly mt-5`]}>
          <Image 
            style={[tw`h-32 rounded-full`]}
            source={{uri: loggedInProfile.picture1}}
          />

          <Image 
            style={[tw`h-32 rounded-full`]}
            source={{uri: userSwiped.picture1}}
          />
      </View>
      <TouchableOpacity 
        style={tw`bg-white m-5 px-10 py-8 rounded-full mt-20`}
        onPress={()  => {
            navigation.goBack();
            navigation.navigate("ChatScreen")
        }}
      >
          <Text style={[tw`text-center`]}>Send a Message</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MatchScreen

const styles = StyleSheet.create({})