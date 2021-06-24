import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import ListItem from './listItem';

export default function ProductList({ productList }) { 

    return (
        <ScrollView >
            <FlatList
                data={productList}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>(
                    <ListItem item={item} />
              )}
            />
        </ScrollView>
    )
}

// const styles = StyleSheet.create({
//     list: {
//         flex: 1,
//         alignSelf: 'stretch',
//         flexDirection: 'row',
//         padding: '3%',
//         paddingLeft: 5,
//     },

//     title: {
//         color: 'white',
//         fontSize: 40,
//         fontWeight: 'bold',
//     }
// });