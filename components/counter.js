import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Counter() {
    return (
        <View style={styles.circle}>
            <Text>x</Text>
            <Text>kcal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        backgroundColor: 'purple',
        borderRadius: 50/2,
        alignSelf: 'flex-start'
    },

});