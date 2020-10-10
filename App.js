import React from 'react';
import {
  StyleSheet,
  View,
  TextInput ,
  Image ,
  Text,
  Button
} from 'react-native';

import {logo} from './image';


const App = () => (
  <View style={styles.container}>
      <Image  style={styles.logo} source={logo} />
       <TextInput style={styles.input} >Nama </TextInput>
       <TextInput style={styles.input}>Kelas </TextInput>
       <Button title="Login"/>
       <Text style={{marginTop: 50}}>Telkom Digital Talent incubator</Text>
</View>
);
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 228,
    height: 115,
  },
   input: {
    marginTop: 10,
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
});
