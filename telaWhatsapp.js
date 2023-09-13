import React from "react";
import {Text, View, StyleSheet,} from "react-native";
import { Avatar } from "react-native-paper";

const Flex = () => {
    return(
        <View
        style={[
            styles.container,{
                flexDirection: 'column',
            },
        ]}>
            <View style={{flex: 1.5, backgroundColor: '#008B8B'}}>
            <Text>WhatsApp</Text>
            
            </View>
            
            
            <View style={{flex: 7, backgroundColor: '#fff', flexDirection: 'row',}}>
                <Avatar.Image size={65} style={styles.avatar} source={require('../projeto-pmovel/img/emoji.png')}/>
                <View style={{backgroundColor: '#fff', flexDirection: 'column', left: 13,}}>
                <Text style={styles.text1}>Fim de Semana</Text>
                <Text style={styles.text2}>Sofia: Figurinha</Text>
                </View>
                </View>

                
           
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    avatar: {
        top: 10,
        left: 15,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        left: 30,
        top: 15,
        
    },
    text2: {
        top: 50,
        
    }
});

export default Flex;
