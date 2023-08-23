import { Text, TextInput } from "react-native";
import { useState } from "react";

 const input = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    
    return(
        <>
        <Text style={{
            marginTop: 350,
            marginLeft: 150,
            color: '#00FA9A',

        }}>Tela de Login</Text>
        <TextInput
            onChangeText={(texto1) => setInput1(texto1)}
            defaultValue={input1}
            placeholder="Coloque o seu email..."
            style={{
                borderWidth: 3, 
                height: 40,
                width: 300,
                textAlign: "center",
                marginTop: 39,
                marginLeft: 50,
                borderColor:'#CD5C5C',
                
            }}
        />

        <TextInput
            secureTextEntry={true}
            onChangeText={(texto2) => setInput2(texto2)}
            defaultValue={input2}
            placeholder="Coloque a sua senha..."
            style={{
                borderWidth: 3, 
                height: 40,
                textAlign: "center",
                marginTop: 15,
                marginLeft: 50,
                width: 300,
                borderColor:'#CD5C5C',
            }}
        />

        </>
    );
}

export default input;