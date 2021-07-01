import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import ListItem from './listItem';

export default function CategoryContainer({ getProductByCategory }) { 

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>getProductByCategory(1,'zboz')}
                style={styles.tail}>
                <Text >Zbozowe</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>getProductByCategory(2,'Meet & Fish')}
                style={styles.tail}>
                <Text>Mięso</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>getProductByCategory(3,'Fruits & Vegetables')}
                style={styles.tail}>
                <Text>Owoce i warzywa</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>getProductByCategory(4, 'Diary products')}
                style={styles.tail}>
                <Text>Nabiał</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'flex-start',
        marginTop: '30%',
    },
    tail: {
        backgroundColor: 'pink',
        width: '40%',
        height: 100,
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 20,
    }
})
