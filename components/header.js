import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
        paddingTop: '7%',
        paddingLeft: 5,
    },

    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    }
});