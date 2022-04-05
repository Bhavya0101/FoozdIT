import { View, Text, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';
import tw from 'twrnc';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const HomeScreen = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    console.log(user)
  return (
    <SafeAreaView>
      {/* Headrer */}
        <View>
          <TouchableOpacity style={tw`absolute left-5 top-3`}>
              <Image 
                style={tw`h-10 w-10 rounded-full`}
                source = {{uri: user.photoURL}}
              />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[tw`absolute left-39 top-6 text-xl` , {color: '#674389',fontWeight: 'bold',fontSize:30}]}>Foozd</Text>
          </TouchableOpacity>
        </View>




      {/* HEader End */}
    
    </SafeAreaView>
  )
}

export default HomeScreen