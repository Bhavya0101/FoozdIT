import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-picker';
import storage from '@firebase/storage';
import * as Progress from 'react-native-progress';

const ImagePickker = () => {

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);


    const selectImage = () => {
        const options = {
          maxWidth: 2000,
          maxHeight: 2000,
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
        };
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log(source);
            setImage(source);
          }
        });
      };

      const uploadImage = async () => {
        const { uri } = image;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        setUploading(true);
        setTransferred(0);
        const task = storage()
          .ref(filename)
          .putFile(uploadUri);
        // set progress state
        task.on('state_changed', snapshot => {
          setTransferred(
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
          );
        });
        try {
          await task;
        } catch (e) {
          console.error(e);
        }
        setUploading(false);
        Alert.alert(
          'Photo uploaded!',
          'Your photo has been uploaded to Firebase Cloud Storage!'
        );
        setImage(null);
      };
  return (
    <View>
      <Text>ImagePickker</Text>
    </View>
  )
}

export default ImagePickker

const styles = StyleSheet.create({})