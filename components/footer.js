import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './counter';
import AddButton from './addButton';

export default function footer({ navigate }) {
    return (
        <View style={styles.footer}>
            <View style={styles.btnContainer}>
                <Counter />
                <AddButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        paddingBottom: 5,
        alignSelf: 'stretch',
    },

    btnContainer: {
        paddingRight: '2%',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    }
});