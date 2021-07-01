import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function ListItem({item, deleteProduct}) {
    return (
        <View style={styles.productContainer}>
            <View style={styles.row}>
                <Text style={styles.productName}>{item.name}</Text>
                {item.quantity && 
                <Text 
                    style={styles.trash}
                    onPress={()=>{deleteProduct(item.id)}}>🗑️</Text>
                }
            </View>

            <View style={styles.row}>
                <Text style={styles.productQuantity}>{item.quantity ? item.quantity : 100}{item.unit}</Text>
                <Text>{item.quantity ? item.quantity*item.kcal/100: item.kcal} kcal</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'column',
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

});