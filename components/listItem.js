import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ListItem({item, setProductList, deleteProduct, navigation}) {
    if(item.quantity)
        return (
            <View style={styles.productContainer}>
                <View style={styles.row}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <TouchableOpacity
                        style={styles.trash}
                        onPress={()=>{deleteProduct(item.id)}}>
                        <Image 
                            style={styles.trashImg}
                            source={require('../assets/remove.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <Text style={styles.productQuantity}>{item.quantity ? item.quantity : 100}{item.unit}</Text>
                    <Text>{item.quantity ? item.quantity*item.kcal/100: item.kcal} kcal</Text>
                </View>
            </View>
        )
    else
        return (
            <TouchableOpacity 
                style={styles.productContainer}
                onPress={()=>{navigation.navigate('Weighing',{
                    item: item,
                    setProductList: setProductList
                })}}>

                <View style={styles.row}>
                    <Text style={styles.productName}>{item.name}</Text> 
                </View>

                <View style={styles.row}>
                    <Text style={styles.productQuantity}>100{item.unit}</Text>
                    <Text>{item.kcal} kcal</Text>
                </View>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '90%',
        padding: 5,
        paddingBottom: 10,
        marginTop: 20,
        borderRadius: 20,
        borderColor: '#3A7D44',
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
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    trashImg: {
        width: 20,
        height: 20,
    }

});