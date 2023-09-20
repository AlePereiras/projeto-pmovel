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
                },
            ]}
        >
            <BarraSuperior />

            {/* contatos */}
            <View style={{ flex: 7, backgroundColor: '#fff' }}>
                <Contatos nome='Fim de semana' mensagem='Sofia: Figurinha' horario='09:49' imagem='https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png' badge={1} />
                <Contatos nome='João Ferreira' mensagem='digitando...' horario='09:45' imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPauAbpxnUv4uaiG_rwcwlS4QBTzlscTeiyw&usqp=CAU' />
                <Contatos nome='Jane Souza' mensagem='Melhor lugar do mundo' horario='09:37' imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLvpxfKtutoW0n4zxa6mTWj-YKPO2Xp8qEg&usqp=CAU' />
            </View>

        </View>
    );
};

const BarraSuperior = () => {
    return (
        <View style={{ flex: 1.5, backgroundColor: "#008B8B", }}>
            <Text style={{ color: '#fff', fontWeight: "bold", top: 25, left: 15, fontSize: 20, }}>WhatsApp</Text>

            <View style={styles.borda}>
                <Text style={{ color: '#fff', fontSize: 20, top: 4, }}>Conversas</Text>
                <Badge style={{ backgroundColor: "#fff", color: "#000", marginLeft: 5 }}>1</Badge>
            </View>
        </View>
    )
}

const Contatos = ({ nome, mensagem, imagem, horario, badge }) => {
    return (
        <View style={{ backgroundColor: "#fff", flexDirection: "row", height: 96 }}>

            <View style={{ flexDirection: "column" }}>
                <Avatar.Image size={65} style={styles.avatar} source={{ uri: imagem }} />
            </View>

            <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={styles.text1}> {nome} </Text>
                <Text style={styles.text2}> {mensagem}</Text>
                <Divider style={{ top: 31, left: 15, width: 170, }} />
                <Divider style={{ top: 30, width: 130, left: 184, }} />
            </View>

            <View style={{ top: 24, left: 70, }}>
                <Text style={{ color: "green", left: 10, }}>{horario}</Text>
                <Badge style={{ backgroundColor: "green", top: 5, }}>{badge}</Badge>
            </View>

        </View>
    )
}

const CONTATOS = [
    { imagem: 'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png', texto1: 'Fim de semana', texto2: 'Sofia: Figurinha', horario: '09:49', badge: 1 },
    { imagem: '' },
    { imagem: '' },
];

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
    borda: {
        width: 130,
        marginTop: 70,
        paddingBottom: 10,
        marginLeft: 55,
        flexDirection: 'row',
        borderBottomColor: '#fff',
        borderWidth: 3,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
    }
});

export default Flex;









