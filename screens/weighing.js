import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import Header from '../components/header';

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
            <View style={styles.row}>
                <Image 
                    style={styles.icon}
                    source={require('../assets/cup.png')}/>
                <TextInput
                    style={styles.input}
                    onChangeText={setCup}
                    value={cup}
                    keyboardType="numeric"
                    caretHidden={true}
                />
                <Text style={styles.text}>Cup</Text>
            </View>
            <View style={styles.row}>
                <Image
                    style={styles.icon}
                    source={require('../assets/tableSpoon.png')}/>
                <TextInput
                    style={styles.input}
                    onChangeText={setTbs}
                    value={Tbs}
                    keyboardType="numeric"
                    caretHidden={true}
                />
                <Text style={styles.text}>Tbs</Text>
            </View>
            <View style={styles.row}>
                <Image
                    style={styles.icon}
                    source={require('../assets/tbs.png')}/>
                <TextInput
                    style={styles.input}
                    onChangeText={settbs}
                    value={tbs}
                    keyboardType="numeric"
                    caretHidden={true}
                />
                <Text style={styles.text}>tbs</Text>
            </View>
            <View style={styles.row}>
                <Image
                    style={styles.icon}
                    source={item.unit == 'ml'? require('../assets/fluidScale.png') : require('../assets/scale.png')}/>
                <TextInput
                    style={styles.input}
                    onChangeText={setSi}
                    value={si}
                    keyboardType="numeric"
                    caretHidden={true}
                />
                <Text style={styles.text}>{item.unit}</Text>
            </View>
            

            <View style={styles.footer}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={()=>calculateQuantityAndSet()}
                        disabled={!cup && !Tbs && !tbs && !si ? true : false}><Text style={styles.approve}>OK</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        paddingBottom: 5,
        paddingTop: '30%',
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
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    input: {
        width: '40%',
        padding: 5,
        paddingBottom: 10,
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '2%',
        borderRadius: 20,
        borderColor: '#3A7D44',
        borderWidth: 4,
        fontSize: 20,
        textAlign: 'right',
    },

    text: {
        opacity: 0.4,
    },

    icon: {
        marginLeft: '-10%',
        width: 50,
        height: 50,
    },
})
