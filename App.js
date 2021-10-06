import React from "react";
import { Text, View, StyleSheet, Image} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo Crisanch!</Text>
      <Image
        source={{uri: 'https://picsum.photos/200/200'}}
        style={styles.image}
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
  image: { height: 200, width: 200 }
})

export default App;