import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';
import tw from 'twrnc';
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper"
<<<<<<< HEAD
import { onSnapshot, collection } from 'firebase/firestore';
=======
>>>>>>> DyanmicSwipeData
import { db } from '../firebase';
import { collection, doc, onSnapshot, query, setDoc, getDocs, where } from "@firebase/firestore"
import { async } from '@firebase/util';


const DUMMY_DATA = [
  {
    firstName: "Aditya",
    lastName: "Mathur",
    occupation: "Software Engineer",
    photo: "https://i.postimg.cc/2yM2CC5x/Adii-1.jpg",
    age: 23, 
    id: 1,
  },
  {
    firstName: "Naman",
    lastName: "Jain",
    occupation: "Co-Founder @ FoozdIT",
    photo: "https://i.postimg.cc/85HC8Ctq/Naman-1.png",
    age: 24,
    id: 2
  },
  {
    firstName: "Bhavya",
    lastName: "Sharma",
    occupation: "Co-Founder @ FoozdIT",
    photo: "https://i.postimg.cc/bwcfThRb/Bhavya-1.png",
    age: 22,
  },


]


const HomeScreen = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [profiles, setProfiles] = useState([])
    const swipeRef = useRef(null);
    console.log(user)

    useLayoutEffect(
      () => 
        onSnapshot(doc(db,"users",user.uid), (snapshot) => {
          if (!snapshot.exists()) {
            navigation.navigate("NamePage")
          }
        })
    )

<<<<<<< HEAD
    useEffect (() => {
=======


    useEffect(() => {
>>>>>>> DyanmicSwipeData
      let unsub;

      const fetchCards = async () => {
        unsub = onSnapshot(collection(db, "users"), (snapshot) => {
<<<<<<< HEAD
          setProfiles(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        })
      }
=======
          setProfile(
            snapshot.docs
              .filter((doc) => doc.id !== user.uid)
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
          )
        })
      }

>>>>>>> DyanmicSwipeData
      fetchCards();
      return unsub;
    }, [])

<<<<<<< HEAD
    console.log(profiles)
=======


    console.log(profile)


    const swipeLeft = (cardIndex) => {
      if (!profile[cardIndex]) return;

      const userSwiped = profile[cardIndex];
      console.log('You swiped Left  ON ${userSwiped.displayName}');

      setDoc(doc(db, "users", user.uid,  "leftSwipe", userSwiped.id),
      userSwiped);
    }


    const swipeRight = (cardIndex) => {
      if (!profile[cardIndex]) return;

      const userSwiped = profile[cardIndex];
      console.log('You swiped Right  ON ${userSwiped.displayName}');

      setDoc(doc(db, "users", user.uid,  "rightSwipe", userSwiped.id),
      userSwiped);
    }




>>>>>>> DyanmicSwipeData
    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Header */}
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
      <View style={tw`flex-1 -mt-3 top-17`}>
        <Swiper
          ref={swipeRef} 
            containerStyle={{backgroundColor: "transparent"}}
            cards={profiles}
            stackSize={10}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            onSwipedLeft= {(cardIndex) => {
              console.log("Swipe Left");
              swipeLeft(cardIndex)
            }}
            onSwipedRight= {(cardIndex) => {
              console.log("Swipe Right");
              swipeRight(cardIndex)
            }}
            overlayLabels={{
              left: {
                title: "Nope",
                style:{
                  label: {
                    textAlign: "right",
                    color: "red",
                  },
                },
              },
              right: {
                title: "Like",
                style:{
                  label: {
                    color: "#674389",
                  },
                },
              },
            }}
            renderCard = {(card) => card ? (
              <View key={card.id} style={tw`relative bg-white h-140 rounded-xl`}>
                <Image
                  style={tw`h-full w-full rounded-xl`}
                  source={{ uri: card.picture1 }}
                />

                <View style={[tw`absolute bottom-0 w-full flex-row jutify-between
                                items-between h-20 px-6 py-2`, styles.cardShadow]}>
                  <View>
                    <Text style={[tw`text-xl font-bold`, 
                      {
                        color:'#F4F0F6', 
                        shadowColor: "#000", 
                        shadowOffset: {width: 0, height: 10,}
                      }]}>
                      
                      {card.name}
                    </Text>
                  </View>
                </View>

              </View>
            ) : (
              <View style={tw`relative bg-white h-140 rounded-xl`}>
                <Text style={[tw`font-bold pb-5`]}>No More Cards</Text>
              </View>
            )}
          />
      </View>
        

      {/* Cards  Ends*/} 

      {/* Bottom Icons*/} 

              <View style={tw`flex flex-row justify-evenly`}>

                <TouchableOpacity style={[tw`items-center justify-center rounded-full w-16 h-16`]}>
                    <Entypo name="heart" size={35} color="#674389"/>
                </TouchableOpacity>

                <TouchableOpacity style={[tw`items-center justify-center rounded-full w-16 h-16`]}>
                    <Image source={require('../pictures/foozdIcon.png')} style={styles.bottomFIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={[tw`items-center justify-center rounded-full w-16 h-16`]}>
                  <FontAwesome5 name="utensils" size={24} color="#674389" />
                </TouchableOpacity>
                

                <TouchableOpacity style={[tw`items-center justify-center rounded-full w-16 h-16`]} onPress={logout}>
                    <Entypo name="list" size={35} color="#674389"/>
                </TouchableOpacity>
          
                 
              </View>







      {/* Bottom Icoons*/} 



      
    
    </SafeAreaView>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textDecoration: {
    color:'#F4F0F6',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
  },
  bottomFIcon: {
    width: 30,
    height: 30,
  },
});

