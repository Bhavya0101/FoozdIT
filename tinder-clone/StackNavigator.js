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
import IntroScreen from './screens/IntroScreen';
import AnimatedSplash from "react-native-animated-splash-screen";
import MatchScreen from './screens/MatchScreen';


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
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="ChatScreen" component={ChatScreen} />

                    </Stack.Group>

                    <Stack.Group screenOptions={{ presentation: 'modal' }}>

                       
                        <Stack.Screen name="GenderPreferrence" component={GenderPreferrence} />
                        <Stack.Screen name="FoodProfile" component={FoodProfile} />
                        <Stack.Screen name="AddPictures" component={AddPictures} />
                        
                    </Stack.Group>

                    <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
                        <Stack.Screen name='Match' component={MatchScreen}/>
                    </Stack.Group>

                </>
            ) : (
                <Stack.Group>
                    <Stack.Screen name="IntroScreen" component={IntroScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="MobileNumberVerification" component={MobileNumberVerification} />
                    <Stack.Screen name="OtpEnterPage" component={OtpEnterPage} />
                    <Stack.Screen name='NamePage' component={NamePage} />
                    <Stack.Screen name="BdayDatePage" component={BdayDatePage} />
                    <Stack.Screen name="GenderPage" component={GenderPage} />
                </Stack.Group>
            )}

        </Stack.Navigator>
    );
};

export default StackNavigator;