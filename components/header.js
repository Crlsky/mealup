import React from 'react';
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity } from 'react-native';

export default function Header({productList, setProductList, type}) {
    return (
        <View style={[styles.header, type == 'primary' ? {backgroundColor:'#A2A72D'} : {backgroundColor:'#BE6E46'}]}>
            <Text style={styles.title}>Meal Up</Text>
            {(productList && productList.length > 0) &&
            <TouchableOpacity 
                style={styles.trashContainer}
                onPress={()=>setProductList([])}>
                <Image
                    source={require('../assets/trash.png')}
                    style={styles.trash} />
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
        paddingLeft: 5,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },

    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    trash: {
        resizeMode: "contain",
        height: 50,
    },

    trashContainer: {
        marginTop: 5,
        marginRight: 15,
        width: 40,
        height: 50,
    }
});