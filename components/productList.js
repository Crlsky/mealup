import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './listItem';

export default function ProductList({ productList, searchProductList, setProductList, deleteProduct, navigation }) { 

    return (
        <FlatList
            data={productList}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item})=>(
                <ListItem item={item} deleteProduct={deleteProduct} setProductList={setProductList} navigation={navigation}/>
            )}
        />
    )
}