import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Counter() {
    return (
        <View style={styles.counterContainer}>
            <Text style={styles.summaryDisplay}>3123123</Text>
            <Text style={styles.unitText}>kcal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        display:'flex',
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignSelf: 'center',
        alignItems: 'flex-end',
        width: '75%',
        height: 70,
        marginRight: -20,
        paddingBottom: 5,
        backgroundColor: '#FFBC42',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
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