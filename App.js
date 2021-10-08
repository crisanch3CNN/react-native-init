import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';


const App = () => {

  const [selectedImage, setselectedImage] = useState(null)

  let openImagePickerAsync = async() => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    
    if (permissionResult.granted === false) {
      alert('Permisos a la cámara es requerido');
      return;
    }
    
    const pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (pickerResult.cancelled === true) {
      return;
    }
    setselectedImage({localUri: pickerResult.uri})
  }

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Compartir,  no está disponible en tu pataforma.');
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una imagen:</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
      >
        <Image
          source={{
            uri: selectedImage !== null ?
              selectedImage.localUri
              :'https://picsum.photos/200/200'
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      {selectedImage ? (
        <TouchableOpacity
          onPress={openShareDialog}
          style={ styles.button}
        >
          <Text style={ styles.buttonText}>Compartir la imagen</Text>
        </TouchableOpacity>) : (
          <View />
      )}

    </View >
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
  },
  title: { fontSize: 30, color: '#ffff' },
  image: { height: 200, width: 200, borderRadius:100 },
  button: { backgroundColor: 'green', padding:7, marginTop:10 },
  buttonText: { color: '#ffff', fontSize:20 }
})

export default App;