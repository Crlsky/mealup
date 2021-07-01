import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Modal, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductList from '../components/productList';

export default function Category({navigation}) {
    const [categoryId, setCategoryId] = useState(null);
    const [search, setSearch] = useState(null);
    const [searchProductList, setList] = useState([]);

    const searchProduct = (productName) => {
        if(productName.length>=2){
            fetch('http://memecloud.co:8081/classes/ajax/getProducts.php?name='+productName)
            .then((response) => response.json())
            .then((json) => {
                if(json.status==1)
                    setList([]);
                    json['products'].map((anObjectMapped, index) => {
                        setList((prevList)=>{
                            return [{id: anObjectMapped.id_product, name: anObjectMapped.name_en, kcal: anObjectMapped.kcal, unit: anObjectMapped.unit}, ...prevList]
                        })
                    })
            })
        }else{
            setList([])
        }
        console.log(searchProductList.length);
    }
    return (
        <View style={styles.container}>
            {/* search */}
            <SearchBar
                placeholder="Type Here..."
                onChangeText={searchProduct}
                value={search}
            />
            {/* category list or product list if( search != null || id category != null) */}
            {searchProductList.length > 0 || categoryId
                ? <ProductList productList={searchProductList} />
                : <Text>Na razie tu nic nie ma ale będą kafelki </Text>
            }
            {/* footer use ready footer
            <Footer navigation={navigation}/> */}
        </View>
    );
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 50,
  }
}
