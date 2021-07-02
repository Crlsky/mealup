import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/header';
import ProductList from '../components/productList';
import Footer from '../components/footer';
import Logo from '../components/logo';

export default function Home({navigation}) {
    const [productList, setProductList] = useState([])

    const deleteProduct = (id) => {
      setProductList((prevTodos)=>{
        return prevTodos.filter(todo => todo.id != id)
      })
    }

    return (
        <View style={styles.container}>
            <Header type={'primary'} productList={productList} setProductList={setProductList} />
            { productList.length > 0
            ? <ProductList productList={productList} deleteProduct={deleteProduct}/>
            : <Logo />
            }
            <Footer productList={productList} setProductList={setProductList} navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex:1,
  }
})
