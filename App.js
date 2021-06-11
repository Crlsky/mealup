import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log('pre fetch');
    fetch('https://world.openfoodfacts.org/api/v0/product/'+data+'.json')
    .then((response) => response.json())
    .then((json) => {
      const name = json.product.product_name;
      const kcal = json.product.nutriments['energy-kcal_100g'];
      alert(`Product ${name} has ${kcal} kcal in 100g`);
    })

    
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
      {scanned && <Button title={'Tap to Scan Again'} onPress={rescanning} />}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 40
  }
}
