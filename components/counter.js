import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Counter({productList}) {
    const counter = productList.reduce((count,v) =>  count += v.kcal*v.quantity/100 , 0)

    return (
        <View style={styles.counterContainer}>
            <Text style={styles.summaryDisplay}>{counter}</Text>
            <Text style={styles.unitText}>kcal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        display:'flex',
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        height: 55,
        backgroundColor: '#586BA4',
        borderRadius: 100,
        marginBottom: -40,
        paddingBottom: 5,
    },

    unitText: {
        fontSize: 25,
        marginRight: 70,
        marginLeft: 10,   
    },
    
    summaryDisplay: {
        fontSize: 30,
    }

});