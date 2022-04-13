import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text,ScrollView , Button, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import useAuth from '../hooks/useAuth';
import { Chip } from 'react-native-paper';

const FoodProfile = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();
    const [Vegetarian, setVegetarian] = useState(null);
    const [NonVegetarian, setNonVegetarian] = useState(null);
    const [Photographer, setPhotographer] = useState(null);
    const [AlwaysBroke, setAlwaysBroke] = useState(null);
    const [OpenToTryNewThings, setOpenToTryNewThings] = useState(null);
    const [HealthConcious, setHealthConcious] = useState(null);
    const [Possessive, setPossessive] = useState(null);
    const [ForeverHungry, setForeverHungry] = useState(null);
    const [JustOneBite, setJustOneBite] = useState(null);
    const [Chef, setChef] = useState(null);
    const [OrderAtHome, setOrderAtHome] = useState(null);
    const [Taste, setTaste] = useState(null);
    const [Spicy, setSpicy] = useState(null);
    const [Sweet, setSweet] = useState(null);
    const [Tangy, setTangy] = useState(null);
    const [CreamyCheesy, setCreamyCheesy] = useState(null);
    const [Salty, setSalty] = useState(null);
    const [Ambience, setAmbience] = useState(null);
    const [FoodQuality, setFoodQuality] = useState(null);
    const [Hygiene, setHygiene] = useState(null);
    const [Service, setService] = useState(null);
    const [Afghan, setAfghan] = useState(null);
    const [American, setAmerican] = useState(null);
    const [BBQ, setBBQ] = useState(null);
    const [Chinese, setChinese] = useState(null);
    const [Desserts, setDesserts] = useState(null);
    const [French, setFrench] = useState(null);
    const [Greek, setGreek] = useState(null);
    const [FastFood, setFastFood] = useState(null);
    const [HealthyFood, setHealthyFood] = useState(null);
    const [Italian, setItalian] = useState(null);
    const [Japanese, setJapanese] = useState(null);
    const [Lebanese, setLebanese] = useState(null);
    const [Mexican, setMexican] = useState(null);
    const [ModernIndian, setModernIndian] = useState(null);
    const [NorthEastern, setNorthEastern] = useState(null);
    const [Seafood, setSeafood] = useState(null);
    const [StreetFood, setStreetFood] = useState(null);
    const [SouthIndian, setSouthIndian] = useState(null);


    const dbVegetarian = () => {
      setDoc(doc(db,'users', user.uid), {
        id:user.uid,
        Vegetarian: Vegetarian
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
    <ScrollView style={{flex: 1, backgroundColor: '#674389'}}>
        <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xl antialiased `}>Ramp Your Foodie Profile</Text>
        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Diet</Text>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Vegetarian')}>Vegetarian</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Non-Vegetarian')}>Non-Vegetarian</Chip>
        </TouchableOpacity>


        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Type Of Foodie</Text>
        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Photographer')}>Photographer</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Always Broke')}>Always Broke</Chip>
        </TouchableOpacity>


        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Open To Try New Things ')}>Open To Try New Things </Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Health Concious')}>Health Concious</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Possessive')}>Possessive</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Forever Hungry')}>Forever Hungry</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('“Just One-Bite”')}>“Just One-Bite”</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Chef')}>Chef</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Order At Home')}>Order At Home</Chip>
        </TouchableOpacity>

        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Taste</Text>
        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Spicy')}>Spicy</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Sweet')}>Sweet</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Tangy')}>Tangy</Chip>
        </TouchableOpacity>


        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Creamy / Cheesy')}>Creamy / Cheesy</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Salty')}>Salty</Chip>
        </TouchableOpacity>


        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Preference</Text>
        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Ambience')}>Ambience</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Food Quality')}>Food Quality</Chip>
        </TouchableOpacity>


        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Hygiene')}>Hygiene</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Service')}>Service</Chip>
        </TouchableOpacity>


        <Text style={tw` pt-4 items-center font-bold px-3 text-white text-4x `}>Cuisine</Text>
        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Afghan')}>Afghan</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('American')}>American</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('BBQ')}>BBQ</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Chinese')}>Chinese</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Continental')}>Continental</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Desserts')}>Desserts</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('French')}>French</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Greek')}>Greek</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Fast Food')}>Fast Food</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Healthy Food')}>Healthy Food</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Italian')}>Italian</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Japanese')}>Japanese</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Lebanese')}>Lebanese</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Mexican')}>Mexican</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Modern Indian')}>Modern Indian</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('North Eastern')}>North Eastern</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('North Indian')}>North Indian</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Seafood')}>Seafood</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('Street Food')}>Street Food</Chip>
        </TouchableOpacity>

        <TouchableOpacity style={tw`pt-1`}>
        <Chip style={[{width:97, height:33}]} onPress={() => console.log('South Indian')}>South Indian</Chip>
        </TouchableOpacity>

        

      <Button style={tw`bottom-38`} title='Logout' onPress={logout}/>
    </ScrollView>
  )
}

export default FoodProfile

