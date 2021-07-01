import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function AddButton({navigation}) {
    return (
        <View style={styles.circle}>
            <Text 
                style={styles.buttonText}
                onPress={()=>navigation.navigate('Category')}>+</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#0496FF',
        borderRadius: 100,
    },

    buttonText: {
        color: '#fff',
        fontSize: 70,
        marginTop: -6
    }


});