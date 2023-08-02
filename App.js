// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
  // return (
    //  <View style={styles.container}>
    // <Text>Hello Word!</Text>
    // <StatusBar style="auto" />
    // </View>
  // );
// }

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#A52A2A',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});

import { Text } from "react-native";

const MyApp = () => {
  return ( 

  <>

  <Text>Hello Word</Text> 
  <Text>IFAL</Text>
  <Gato></Gato>
  <Gato></Gato>
  </>
  
  )
}

const Gato = () => {
  return (
  
  <Text>Eu sou o Douglas!</Text>
  )
}

export default MyApp;



