import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';

export default function CategoryContainer({ getProductByCategory }) { 

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>getProductByCategory(1,'Grain products')}
                style={styles.tile}>
                <Image 
                    style={styles.tileImg}
                    source={require('../assets/bread.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>getProductByCategory(2,'Meet & Fish')}
                style={styles.tile}>
                <Image 
                    style={styles.tileImg}
                    source={require('../assets/fish.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>getProductByCategory(3,'Fruits & Vegetables')}
                style={styles.tile}>
                <Image 
                    style={styles.tileImg}
                    source={require('../assets/vegetables.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>getProductByCategory(4, 'Diary products')}
                style={styles.tile}>
                <Image 
                    style={styles.tileImg}
                    source={require('../assets/cheese.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'flex-start',
        marginTop: '20%',
    },
    tile: {
        backgroundColor: '#A2A72D',
        width: '40%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 30,
        borderRadius: 10,
    },

    tileImg: {
        height: 100,
        width: 100,
    }



})
