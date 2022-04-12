import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from './hooks/useAuth';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import MobileNumberVerification from './screens/MobileNumberVerification';
import LoginScreen from './screens/LoginScreen';
import OtpEnterPage from './screens/OtpEnterPage';
import NamePage from './screens/NamePage';
import BdayDatePage from './screens/BdayDatePage';
import GenderPage from './screens/GenderPage';
import GenderPreferrence from './screens/GenderPreferrence';
import FoodProfile from './screens/FoodProfile';
import AddPictures from './screens/AddPictures';
import AnimatedSplash from "react-native-animated-splash-screen";

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    const { user } = useAuth();
    
    return (
        <Stack.Navigator
            ScreenOptions={{
                headerShown: false,
            }}
        >
            {user ? (
                <>
                    
                    <Stack.Group>


                        <Stack.Screen name="NamePage" component={NamePage} />
                        <Stack.Screen name="BdayDatePage" component={BdayDatePage} />
                        <Stack.Screen name="GenderPage" component={GenderPage} />
                        <Stack.Screen name="GenderPreferrence" component={GenderPreferrence} />

                    </Stack.Group>

                    <Stack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
                        
                        
                        
                        <Stack.Screen name="FoodProfile" component={FoodProfile} />
                        <Stack.Screen name="AddPictures" component={AddPictures} />
                    </Stack.Group>
                    
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
                
            )}

        </Stack.Navigator>
    );
};

export default StackNavigator;