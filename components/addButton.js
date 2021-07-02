import React from 'react';
import { StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function AddButton({setProductList, navigation}) {
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('Category',{
                setProductList: setProductList
            })}
            style={styles.circle}>
            <Image 
                style={styles.plusImg}
                source={require('../assets/plus.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circle: {
        display: 'flex',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#A2A72D',
        borderRadius: 100,
        marginRight: -10,
    },

    plusImg: {
        width: 50,
        height: 50,
    }
});