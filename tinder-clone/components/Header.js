import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Foundation } from "@expo/vector-icons"
import { Ionicons } from  "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core";
import tw from 'twrnc';

 
const Header = ({ title, callEnabled }) => {
    const navigation = useNavigation();
  return (
    <View style={[tw`p-2 flex-row items-center justify-center`]}>
      <View style={[tw`flex flex-row items-center`]}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={[tw`p-2`]}>
                <Ionicons  name='chevron-back-outline' size={34} color="#FF5864" />
            </TouchableOpacity>
            <Text style={[tw`text-2xl font-bold pl-2`]}>{title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})