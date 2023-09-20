import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Badge, Divider, } from "react-native-paper";


const Flex = () => {
    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: "column",
                    backgroundColor: '#000'
                },
            ]}
        >
            <View style={{ flex: 1.5, backgroundColor: "#008B8B",}}>
                <Text style={{ color: '#fff', fontWeight: "bold", top: 25, left: 15, fontSize: 20, }}>WhatsApp</Text>
                <Text style={{ color: '#fff', top: 60, left: 50, fontSize: 20 }}>Conversas</Text>
                <Badge style={{ backgroundColor: "#fff", color: "#000", }}>1</Badge>
            </View>

            <View style={{ flex: 7, backgroundColor: "#fff", flexDirection: "row" }}>
              
                <View style={{ flexDirection: "column" }}>
                    <Avatar.Image size={65} style={styles.avatar} source={require("../projeto-pmovel/img/emoji.png")} />
                </View>
                        
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                    <Text style={styles.text1}>Fim de Semana</Text>
                    <Text style={styles.text2}>Sofia: Figurinha</Text>
                    <Divider style={{top: 31, left:15, width: 170,}}/>
                    <Divider style={{ top: 30, width: 130, left: 184, }} />
                </View>
                       
                <View style={{ top: 24, left: 95, }}>
                    <Text style={{ color: "green", left: 10, }}>09:49</Text>
                    <Badge style={{ backgroundColor: "green", }}>2</Badge>
                </View>

            </View>

            <View style={{ flexDirection: "column", }}>
                <Avatar.Image size={65} source={require("../projeto-pmovel/img/emoji1.jpg")} />
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
        fontWeight: "bold",
        fontSize: 20,
        top: 15,
        left: 15,
    },
    text2: {
        color: "gray",
        top: 15,
        left: 15,
    },
});

export default Flex;              
                

               
           
            

      


