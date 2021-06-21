import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './counter';

export default function footer({ navigate }) {
    return (
        <View style={styles.footer}>
            <Counter />
            <Counter />

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'red',
        alignSelf: 'stretch',
    },

    btnContainer: {        
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});