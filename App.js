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

import { Text, TextInput } from "react-native";
import { useState } from "react";

const MyApp = () => {
  return ( 

  <>

  <Text>Hello Word</Text> 
  <Text>IFAL</Text>
  <Gato idade = {1}></Gato>
  <Gato idade = {3}></Gato>
  <Gato idade = {9}></Gato>
  
  </>
  
  )
}

const Gato = ({idade}) => {
  const [nome, setNome] = useState('');
  const [cor, setCor] = useState('');

  let text = "anos";
  if(idade === 1){
    text = "ano"
  }

  return (
 
<>
    <TextInput
      onChangeText={(texto) => setNome(texto)}
      defaultValue={nome}
      placeholder="Informe o nome do gato..."
      style={{borderWidth: 3, height: 40, borderColor:'#00FA9A'}}
    />

    <TextInput
    onChangeText={(olhos) => setCor(olhos)}
    defaultValue={cor}
    placeholder="Informe a cor dos olhos do gato..."
    style={{borderWidth: 3, height: 40, borderColor:'#CD5C5C'}}
    />

  <Text>Eu sou uma gata e meu nome é {nome.toUpperCase()} e eu tenho {idade} {text} e a cor dos meus olhos é {cor.toUpperCase()}. </Text> 
  
</>
  );
}

export default MyApp;



