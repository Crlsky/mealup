import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './counter';
import AddButton from './addButton';

export default function Footer({ productList, navigation }) {
    return (
        <View style={styles.footer}>
            <View style={styles.btnContainer}>
                <Counter productList={productList} />
                <AddButton navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        paddingBottom: 5,
        alignSelf: 'stretch',
    },

    btnContainer: {
        paddingRight: '2%',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    }
});