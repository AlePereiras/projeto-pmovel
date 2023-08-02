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
  <Gato nome = "Jubileia" idade = {1}></Gato>
  <Gato nome = "Gato 2" idade = {3}></Gato>
  <Gato nome = "Gato 3" idade = {9}></Gato>
  
  </>
  
  )
}

const Gato = ({nome, idade}) => {

  let text = "anos";
  if(idade === 1){
    text = "ano"
  }

  return <Text>Eu sou uma gata e meu nome é {nome.toUpperCase()} e eu tenho {idade} {text}. </Text> 
}

export default MyApp;



