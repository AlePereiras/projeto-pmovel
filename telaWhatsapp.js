import {Text, View, StyleSheet} from "react-native";
import React from "react";

const Flex = () => {
    return(
        <View
        style={[
            styles.container,{
                flexDirection: 'column',
            },
        ]}>
            <View style={{flex: 1.5, backgroundColor: 'green'}}/>
            <View style={{flex: 7, backgroundColor: 'write'}}/>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
    },
});

export default Flex;