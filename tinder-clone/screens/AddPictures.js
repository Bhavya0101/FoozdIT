import React, {useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button, ImageBackground, TouchableOpacity, TextInput, Image } from "react-native";
import tw from 'twrnc';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import useAuth from '../hooks/useAuth';
import * as ImagePicker from 'expo-image-picker';
import * as Progress from 'react-native-progress';
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { db } from "../firebase"
import { doc, setDoc, updateDoc } from "@firebase/firestore"
 
const AddPictures = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [image6, setImage6] = useState(null);

    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const uploadPicture = () => {
        updateDoc(doc(db,'users', user.uid), {
            picture1: image1,
            picture2: image2,
            picture3: image3,
            picture4: image4,
            picture5: image5,
            picture6: image6
        }).then(() => {
          navigation.navigate('HomeScreen')
        })
        .catch((error) => {
          alert(error.message);
        })
      };
 
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage1(result.uri);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#F0D5ED'}}>
        <Text style={tw` pt-35 items-center font-semibold px-3 text-white text-4xlr antialiased `}>Add Some Nice Photos</Text>
        <TouchableOpacity 
        style={[tw`absolute bottom-40 w-48 bg-white p-4 rounded-2xl`,
                {marginHorizontal: "25%"},
                ]}
        onPress= {pickImage}        
        >
            {image1 && <Image source={{ uri: image1 }} style={{ width: 200, height: 200 }} />}
          <Entypo name="plus" size={24} color="black" style={[tw`pt-1 `,{alignItems:"center"}]}  />
        </TouchableOpacity>

        <TouchableOpacity
          style={[tw`items-center justify-center rounded-full w-156 h-36`]}
          onPress={uploadPicture}
        >
            <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
        

    </View>
  )
}

export default AddPictures

