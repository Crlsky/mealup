import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function ListItem({item}) {
    return (
        <View style={styles.productContainer}>
            <View style={styles.row}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.trash}>🗑️</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.productQuantity}>{item.quantity}g</Text>
                <Text>{item.quantity*item.kcal/100} kcal</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'column',
        // flexWrap: 'wrap',
        display:'flex',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '90%',
        height: 70,
        padding: 5,
        paddingBottom: 10,
        marginTop: 20,
        borderRadius: 20,
        borderColor: '#006BA6',
        borderWidth: 5,
    },

    row: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 2,
        justifyContent: 'space-between',
    },

    productName: {
        fontSize: 20,
        alignSelf: 'flex-start', 
    },
    
    productQuantity: {
        fontSize: 15,
        alignSelf: 'flex-start',
    },

    trash: {

    }

});