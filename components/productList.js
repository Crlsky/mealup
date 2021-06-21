import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProductList({ productList }) {
    // const items = productList.map((listItem)=>{

    // })
    return (
        <ScrollView >
            {productList.map((listItem)=>{
                <Text style={styles.listItem}>{listItem.name} | {listItem.quantity*listItem.kcal/100}</Text>
            })}
            <Text style={styles.listItem}>last item</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'green',
        flexDirection: 'row',
        padding: '3%',
        paddingLeft: 5,
    },

    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    }
});