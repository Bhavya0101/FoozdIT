import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text,ScrollView , Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import useAuth from '../hooks/useAuth';
import { Chip } from 'react-native-paper';
import { db } from "../firebase"
import { doc, setDoc, updateDoc } from "@firebase/firestore"
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";


const FoodProfile = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();

    const [Vegetarian, setVegetarian] = useState('null');
    const [NonVegetarian, setNonVegetarian] = useState('null');
    const [Photographer, setPhotographer] = useState('null');
    const [AlwaysBroke, setAlwaysBroke] = useState('null');
    const [OpenToTryNewThings, setOpenToTryNewThings] = useState('null');
    const [HealthConcious, setHealthConcious] = useState('null');
    const [Possessive, setPossessive] = useState('null');
    const [ForeverHungry, setForeverHungry] = useState('null');
    const [JustOneBite, setJustOneBite] = useState('null');
    const [Chef, setChef] = useState('null');
    const [OrderAtHome, setOrderAtHome] = useState('null');
    const [Spicy, setSpicy] = useState('null');
    const [Sweet, setSweet] = useState('null');
    const [Tangy, setTangy] = useState('null');
    const [CreamyCheesy, setCreamyCheesy] = useState('null');
    const [Salty, setSalty] = useState('null');
    const [Ambience, setAmbience] = useState('null');
    const [FoodQuality, setFoodQuality] = useState('null');
    const [Hygiene, setHygiene] = useState('null');
    const [Service, setService] = useState('null');
    const [Afghan, setAfghan] = useState('null');
    const [American, setAmerican] = useState('null');
    const [BBQ, setBBQ] = useState('null');
    const [Chinese, setChinese] = useState('null');
    const [Continental, setContinental] = useState('null');
    const [Desserts, setDesserts] = useState('null');
    const [French, setFrench] = useState('null');
    const [Greek, setGreek] = useState('null');
    const [FastFood, setFastFood] = useState('null');
    const [HealthyFood, setHealthyFood] = useState('null');
    const [Italian, setItalian] = useState('null');
    const [Japanese, setJapanese] = useState('null');
    const [Lebanese, setLebanese] = useState('null');
    const [Mexican, setMexican] = useState('null');
    const [ModernIndian, setModernIndian] = useState('null');
    const [NorthEastern, setNorthEastern] = useState('null');
    const [NorthIndian, setNorthIndian] = useState('null');
    const [Seafood, setSeafood] = useState('null');
    const [StreetFood, setStreetFood] = useState('null');
    const [SouthIndian, setSouthIndian] = useState('null');


    const dbFoodProfile = () => {
      updateDoc(doc(db,'users', user.uid), {
        Vegetarian: Vegetarian,
        NonVegetarian: NonVegetarian,
        Photographer: Photographer,
        AlwaysBroke: AlwaysBroke,
        OpenToTryNewThings: OpenToTryNewThings,
        HealthConcious: HealthConcious,
        Possessive: Possessive,
        ForeverHungry: ForeverHungry,
        JustOneBite: JustOneBite,
        Chef: Chef,
        OrderAtHome: OrderAtHome,
        Spicy: Spicy,
        Sweet: Sweet,
        Tangy: Tangy,
        CreamyCheesy: CreamyCheesy,
        Salty: Salty,
        Ambience: Ambience,
        FoodQuality: FoodQuality,
        Hygiene: Hygiene,
        Service: Service,
        Afghan: Afghan,
        American: American,
        BBQ: BBQ,
        Chinese: Chinese,
        Desserts: Desserts,
        French: French,
        Greek:Greek,
        FastFood: FastFood,
        HealthyFood: HealthyFood,
        Italian: Italian,
        Japanese: Japanese,
        Lebanese: Lebanese,
        Mexican: Mexican,
        ModernIndian: ModernIndian,
        NorthEastern: NorthEastern,
        Seafood: Seafood,
        StreetFood: StreetFood,
        SouthIndian: SouthIndian
      }).then(() => {
        navigation.navigate('AddPictures')
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
    <ScrollView style={{flex: 1, backgroundColor: '#674389'}}>
        <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased `}>Ramp Your Foodie Profile</Text>
        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Diet</Text>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setVegetarian('Vegetarian')}>Vegetarian</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setNonVegetarian('Non-Vegetarian')}>Non-Vegetarian</Chip>
        </TouchableOpacity>


        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Type Of Foodie</Text>
        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setPhotographer('Photographer')}>Photographer</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setAlwaysBroke('Always Broke')}>Always Broke</Chip>
        </TouchableOpacity>


        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setOpenToTryNewThings('Open To Try New Things ')}>Open To Try New Things </Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setHealthConcious('Health Concious')}>Health Concious</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setPossessive('Possessive')}>Possessive</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setForeverHungry('Forever Hungry')}>Forever Hungry</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setJustOneBite('“Just One-Bite”')}>“Just One-Bite”</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setChef('Chef')}>Chef</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setOrderAtHome('Order At Home')}>Order At Home</Chip>
        </TouchableOpacity>

        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Taste</Text>
        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setSpicy('Spicy')}>Spicy</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setSweet('Sweet')}>Sweet</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setTangy('Tangy')}>Tangy</Chip>
        </TouchableOpacity>


        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setCreamyCheesy('Creamy / Cheesy')}>Creamy / Cheesy</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setSalty('Salty')}>Salty</Chip>
        </TouchableOpacity>


        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Preference</Text>
        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setAmbience('Ambience')}>Ambience</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setFoodQuality('Food Quality')}>Food Quality</Chip>
        </TouchableOpacity>


        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setHygiene('Hygiene')}>Hygiene</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setService('Service')}>Service</Chip>
        </TouchableOpacity>


        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Cuisine</Text>
        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setAfghan('Afghan')}>Afghan</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setAmerican('American')}>American</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setBBQ('BBQ')}>BBQ</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setChinese('Chinese')}>Chinese</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setContinental('Continental')}>Continental</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setDesserts('Desserts')}>Desserts</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setFrench('French')}>French</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setGreek('Greek')}>Greek</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setFastFood('Fast Food')}>Fast Food</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setHealthyFood('Healthy Food')}>Healthy Food</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setItalian('Italian')}>Italian</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setJapanese('Japanese')}>Japanese</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setLebanese('Lebanese')}>Lebanese</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setMexican('Mexican')}>Mexican</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setModernIndian('Modern Indian')}>Modern Indian</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setNorthEastern('North Eastern')}>North Eastern</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setNorthIndian('North Indian')}>North Indian</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setSeafood('Seafood')}>Seafood</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setStreetFood('Street Food')}>Street Food</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => setSouthIndian('South Indian')}>South Indian</Chip>
        </TouchableOpacity>

        <TouchableOpacity
          style={[tw`items-center justify-center rounded-full w-156 h-36`]}
          onPress={dbFoodProfile} 
        >
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>

      
    </ScrollView>
  )
}

export default FoodProfile
