import { View, Text, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';
import tw from 'twrnc';


const HomeScreen = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    console.log(user)
  return (
    <SafeAreaView>
      {/* Headrer */}
        <View>
          <TouchableOpacity>
              <Image 
                style={tw`h-10 w-10 rounded-full`}
                source = {{uri: user.photoURL}}
  
              />
          </TouchableOpacity>
        </View>




      {/* HEader End */}
      <Text>I am the Homescreen</Text>
      <Button title="Go to Chat Screen" onPress={()=> navigation.navigate('Chat')}/>

      <Button title='Logout' onPress={logout}/>
    </SafeAreaView>
  )
}

export default HomeScreen