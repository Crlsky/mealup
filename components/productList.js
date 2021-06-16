import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductList({ productList }) {
    return (
        <View style={styles.list}>
            <Text style={styles.listItem}>Brak produktów</Text>
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