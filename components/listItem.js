import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function ListItem({item}) {
    return (
        <View style={styles.productContainer}>
            <Text>{item.name}|{item.quantity*item.kcal/100}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        display:'flex',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        width: '80%',
        height: 70,
        padding: '2%',
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'lightgreen',
    },

    unitText: {
        fontSize: 30,
        marginRight: 30,
        marginLeft: 10,   
    },
    
    summaryDisplay: {
        fontSize: 40,
    }

});