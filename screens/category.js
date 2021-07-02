import React, { useState, useEffect } from 'react';
import { Keyboard, Platform, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { SearchBar } from 'react-native-elements';
import ProductList from '../components/productList';
import CategoryContainer from '../components/categoryContainer';

export default function Category({route, navigation}) {
    const [search, setSearch] = useState();
    const [searchProductList, setList] = useState([]);
    const {setProductList} = route.params;
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const _keyboardDidShow = () => setKeyboardStatus(true);
    const _keyboardDidHide = () => setKeyboardStatus(false);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);


    const searchProduct = (productName) => {
        setSearch(productName);
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
    }

    const getProductByCategory = (idCategory, name) => {
        setSearch(name);
        fetch('http://memecloud.co:8081/classes/ajax/getProducts.php?idGroup='+idCategory)
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
    }


    return (
        <View style={styles.container}>
            {/* search */}
            <SearchBar
                placeholder="Find product..."
                onChangeText={searchProduct}
                value={search}
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputSearchContainer}
                inputStyle={{color: '#fff', fontWeight: 'bold'}}
                placeholderTextColor='#fff'
                searchIcon={{color: '#fff'}}
                cancelIcon={{color: '#fff'}}
            />
            {/* category list or product list */}
            {searchProductList.length > 0
                ? <ProductList productList={searchProductList} setProductList={setProductList} navigation={navigation}/>
                : <CategoryContainer navigation={navigation} getProductByCategory={getProductByCategory}/>
            }
            {/* footer */}
            <View style={keyboardStatus || searchProductList.length > 0 ? {display:'none'} : styles.footer}>
                <TouchableOpacity
                    style={styles.scannerContainer}
                    onPress={()=>navigation.navigate('Scanner',{
                        setProductList: setProductList
                    })}>
                    <Image
                    style={styles.barcode}
                    source={require('../assets/barcode.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },

    footer: {
        alignSelf: 'stretch',
        paddingBottom: '10%',
    },

    scannerContainer: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#BE6E46',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    barcode: {
        width: 100,
        height: 70,
    },

    searchContainer: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        width: '90%',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },

    inputSearchContainer: {
        backgroundColor: '#F5BB00',
        borderRadius: 100,
    }
})
