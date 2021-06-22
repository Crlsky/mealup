import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function AddButton() {
    return (
        <View style={styles.circle}>
            <Text style={styles.buttonText}>+</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'cyan',
        borderRadius: 100,
    },

    buttonText: {
        color: '#fff',
        fontSize: 70,
        marginTop: -6
    }


});