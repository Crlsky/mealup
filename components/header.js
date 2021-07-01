import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Meal Up</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
        paddingLeft: 5,
        borderRadius: 10
    },

    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    }
});