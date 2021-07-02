import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


export default function Logo() {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={require('../assets/logo_small.png')} 
                style={styles.img} />
            <Text style={styles.invitation}>Count up your meal!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex:1,
    opacity: 0.3,
    justifyContent: 'center',
  },
  img: {
    width: 170,
    height: 170,
    marginBottom: 10,
    alignSelf: 'center',
  },
  invitation: {
      alignSelf: 'center',
      color: '#757575',
      fontSize: 20,
  }
})
