import { View, Text, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, {useLayoutEffect} from "react";
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';
import tw from 'twrnc';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { AntDesign, Entyppo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper"


const DUMMY_DATA = [
  {
    firstName: "Aditya",
    lastName: "Mathur",
    occupation: "Software Engineer",
    photo: require("../Adii-1.jpeg"),
    age: 23,
    id: 1,
  },
  {
    firstName: "Naman",
    lastName: "Jain",
    occupation: "Co-Founder @ FoozdIT",
    photo: require("../Naman-1.png"),
    age: 24,
    id: 2
  },
  {
    firstName: "Bhavya",
    lastName: "Sharma",
    occupation: "Co-Founder @ FoozdIT",
    photo: require("../Bhavya-1.png"),
    age: 22,
  },


]


const HomeScreen = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    console.log(user)

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Headrer */}
        <View style={[tw`flex-row items-center justify--between px-5`, {backgroundColor:'#674389'}]}>
          <TouchableOpacity style={tw`absolute left-5 top-11`} onPress={logout}>
              <Image 
                style={tw`h-10 w-10 rounded-full`}
                source = {{uri: user.photoURL}}
              />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[tw`absolute left-34 top-14 text-xl` , {color: '#674389',fontWeight: 'bold',fontSize:30}]}>Foozd</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={tw`absolute left-85 top-11`} onPress={() => navigation.navigate("Chat")}>
            <Ionicons name='chatbubbles-sharp' size={38} color="#674389"/>
          </TouchableOpacity>

        </View>
      {/* Header End */}

      {/* Cards  Start*/} 
      <View style={tw`flex-1 -mt-6 top-24`}>
        <Swiper 
            containerStyle={{backgroundColor: "transparent"}}
            cards={DUMMY_DATA}
            renderCard = {(card) => (
              <View key={card.id} style={tw`relative bg-white h-3/4 rounded-xl`}>
                <Image
                  style={tw`h-full w-full rounded-xl`}
                  source={{ uri: card.photo }}
                />
              </View>
            )}
          />
      </View>
        

      {/* Cards  Ends*/} 



      
    
    </SafeAreaView>
  )
}

export default HomeScreen