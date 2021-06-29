import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image,  } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ProductModal from '../components/addProductModal';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const openFoodFacts = (ean) => {
    fetch('https://world.openfoodfacts.org/api/v0/product/'+ean+'.json')
    .then((response) => response.json())
    .then((json) => {
      if(json==='undefined' || json.status == 0){
        return false;
      }
      const name = json.product.product_name;
      const kcal = json.product.nutriments['energy-kcal_100g'];
      alert(`Product ${name} has ${kcal} kcal in 100g`);
    })
  }

  const mealUpDB = (ean) => {
    console.log(ean);
    fetch('http://memecloud.co:8081/classes/ajax/getProducts.php?ean='+ean)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.status);
      if(json.status == '0'){
        setModalVisible(true);
        return 0;
      }

      const name = json.name_pl;
      const kcal = json.kcal;
      alert(`Product ${name} has ${kcal} kcal in 100g`);
    })
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // if(!openFoodFacts(data))
    mealUpDB(data);
    
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
      <ProductModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 40
  },

}
