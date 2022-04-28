import { SafeAreaView, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'
import Header from '../components/Header'

const ChatScreen = () => {

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Header title="Chat" />
    </SafeAreaView>
  )
}

export default ChatScreen