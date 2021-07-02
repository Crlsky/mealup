import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './counter';
import AddButton from './addButton';

export default function Footer({ productList, setProductList, navigation }) {
    return (
        <View style={styles.footer}>
            <View style={styles.btnContainer}>
                <Counter productList={productList} />
                <AddButton navigation={navigation} setProductList={setProductList}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        alignSelf: 'stretch',
        paddingBottom: '10%',
    },

    btnContainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingRight: '10%',
        paddingLeft: '10%',
    }
});