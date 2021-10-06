import React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import image from './assets/diamante-rojo.jpg'

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo Crisanch!</Text>
      <Image
        source={{uri: 'https://picsum.photos/200/200'}}
        style={styles.image}
      />
      <Image
        source={image}
        style={styles.image}
      />

      <Button
        color='blue'
        title="Press"
        onPress={()=>Alert.alert('hola!!')}
      />

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
  image: { height: 200, width: 200, borderRadius:100 }
})

export default App;