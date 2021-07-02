import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Weighing({route, navigation}) {
    const [cup, setCup] = useState(0); // ~250g/ml
    const [Tbs, setTbs] = useState(0); // ~15g/ml
    const [tbs, settbs] = useState(0); // ~5g/ml
    const [si, setSi] = useState(0);
    const {item, setProductList} = route.params

    const calculateQuantityAndSet = () => {
        const quantity = (cup*250)+(Tbs*15)+(tbs*5)+si
        setProductList((prevList)=>{
            return [
                {id: item.id, name: item.name, quantity: quantity, unit: item.unit, kcal: item.kcal},
                ...prevList
            ]
        })
        navigation.popToTop();
    }


    return (
        <View style={styles.container}>
            <Header type={'secoundary'}/>
            {/* weigh inputs */}

            <TextInput
                style={styles.input}
                onChangeText={setCup}
                value={cup}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                onChangeText={setTbs}
                value={Tbs}
                keyboardType="numeric"
            />
 
            <TextInput
                style={styles.input}
                onChangeText={settbs}
                value={tbs}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                onChangeText={setSi}
                value={si}
                keyboardType="numeric"
            />

            <View style={styles.footer}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={()=>calculateQuantityAndSet()}><Text style={styles.approve}>OK</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
    },
    footer: {
        paddingBottom: 5,
        alignSelf: 'stretch',
    },

    btnContainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    approve: {
        fontSize: 60,
        fontWeight: '900',
        color: '#A2A72D'
    }
}
