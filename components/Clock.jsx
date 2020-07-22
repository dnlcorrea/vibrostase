import React, {useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";



export default () => {

    return (
        <View style={styles.container}>
            <Text>Time for the exercise:</Text>
            <TextInput value="2"/>

            <Text style={styles.clock}>2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clock: {
        fontSize: 50
    }
});

