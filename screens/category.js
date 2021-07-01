import React, { useState,  } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import ProductList from '../components/productList';
import CategoryContainer from '../components/categoryContainer';

export default function Category({navigation}) {
    const [search, setSearch] = useState();
    const [searchProductList, setList] = useState([]);

    const searchProduct = (productName) => {
        setSearch(productName);
        if(productName.length>=2){
            fetch('http://memecloud.co:8081/classes/ajax/getProducts.php?name='+productName)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
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
    }

    const getProductByCategory = (idCategory, name) => {
        setSearch(name);
        fetch('http://memecloud.co:8081/classes/ajax/getProducts.php?idGroup='+idCategory)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                if(json.status==1)
                    setList([]);
                    json['products'].map((anObjectMapped, index) => {
                        setList((prevList)=>{
                            return [{id: anObjectMapped.id_product, name: anObjectMapped.name_en, kcal: anObjectMapped.kcal, unit: anObjectMapped.unit}, ...prevList]
                        })
                    })
            })
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
            {searchProductList.length > 0
                ? <ProductList productList={searchProductList} />
                : <CategoryContainer navigation={navigation} getProductByCategory={getProductByCategory}/>
            }
            {/* footer */}
            <KeyboardAvoidingView>
                <View style={styles.footer}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Scanner')}><Text>navigate to scanner</Text></TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },
    footer: {
        paddingBottom: 5,
        alignSelf: 'stretch',
    },

    btnContainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
    }
})
