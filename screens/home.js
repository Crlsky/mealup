import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, Modal } from 'react-native';
import Header from '../components/header';

export default function Home() {
    const productList = [
        {name: 'test', quantity: '200', unit: 'ml', kcal: '139'},
        {name: 'test2', quantity: '200', unit: 'ml', kcal: '169'},
        {name: 'test3', quantity: '200', unit: 'ml', kcal: '999'},
    ]

    return (
        <View style={styles.container}>
            <Header />
            
        </View>
    );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'cadetblue',
  }
}