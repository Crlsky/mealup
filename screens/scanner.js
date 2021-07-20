import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ProductModal from '../components/addProductModal';
import config from '../config/config';

export default function Scanner({route,navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [ean, setEan] = useState(null);

  const {setProductList} = route.params;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const openFoodFacts = (ean) => {
    fetch(config.openFoodURL+ean+'.json')
    .then((response) => response.json())
    .then((json) => {
      if(json ===' undefined' || json.status == 0 || !json.product.product_name || !json.product.nutriments['energy-kcal_100g']){
        mealUpDB(ean);
        return false;
      }

      const item = { 
        id: Math.floor(Math.random()*100), 
        name: json.product.product_name, 
        unit: 'g', 
        kcal: json.product.nutriments['energy-kcal_100g']}
              
      navigation.navigate('Weighing',{
        item: item,
        setProductList: setProductList
      })
      return 1;
    })
  }

  const mealUpDB = (ean) => {
    fetch(config.getProductURL+'?ean='+ean)
    .then((response) => response.json())
    .then((json) => {
      if(json.status == '0'){
        setModalVisible(true);
        return 0;
      }
      const item = {
        id: json.products.id_product, 
        name: json.products.name_en,
        unit: json.products.unit,
        kcal: json.products.kcal}

      navigation.navigate('Weighing',{
        item: item,
        setProductList: setProductList
      })
    })
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setEan(data);
    setScanned(true);
    openFoodFacts(data)
    setTimeout(rescanning, 3000);
  };

  const rescanning = () => {
    setScanned(false);
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <ProductModal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        navigation={navigation}
        ean={ean} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'dodgeblue',
  },
}
