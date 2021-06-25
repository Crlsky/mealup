import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, Modal } from 'react-native';
import Header from '../components/header';
import ProductList from '../components/productList';
import Footer from '../components/footer';

export default function Home({navigation}) {
    const [productList, setProductList] = useState([
        {id: 1, name: 'test', quantity: 200, unit: 'ml', kcal: 139},
        {id: 2, name: 'test2', quantity: 200, unit: 'ml', kcal: 169},
        {id: 3, name: 'test3', quantity: 200, unit: 'ml', kcal: 999},
    ])

    const deleteProduct = (id) => {
      setProductList((prevTodos)=>{
        return prevTodos.filter(todo => todo.id != id)
      })
    }

    return (
        <View style={styles.container}>
            <Header />
            <ProductList productList={productList} deleteProduct={deleteProduct}/>
            <Footer productList={productList} navigation={navigation}/>
        </View>
    );
}

const styles = {
  container: {
    flex: 1,
  }
}
