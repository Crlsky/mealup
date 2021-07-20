import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import RadioButton from 'expo-radio-button';
import config from '../config/config';

export default function ProductModal({modalVisible, setModalVisible, navigation, ean}) {
    const [name, onChangeName] = useState(null);
    const [manufacturer, onChangeManufacturer] = useState(null);
    const [calories, onChangeCalories] = useState(null);
    const [unit, setUnit] = useState(null);

    const makeJsonProduct = () => {
      const jsonProduct = {
        name: name,
        manufacturer: manufacturer,
        calories: calories,
        unit: unit,
        ean: ean,
      }

      setModalVisible(!modalVisible)
      saveNewProduct(JSON.stringify(jsonProduct));
    }

    const saveNewProduct = (jsonProduct) => {
        console.log(jsonProduct);
        fetch(config.insertProductURL,{
            method: "POST",
            body: jsonProduct
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
    }

    return (
        <View>
             <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={[styles.modalText, {fontSize: 30, fontWeight: '600'}]}>Product no found!</Text>
                  <Text style={styles.modalText}>Would you like to help us and add this product to database? It won't take long.</Text>
                    {/* name input */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Name"
                    />
                    {/* manufacturer input */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeManufacturer}
                        value={manufacturer}
                        placeholder="Manufacturer"
                    />
                    {/* calories input / 100 units */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeCalories}
                        value={calories}
                        keyboardType="numeric"
                        placeholder="kcal in 100g/ml"
                    />
                    {/* unit radioInput  */}
                  <View style={styles.row}>
                    <RadioButton value="g"
                      style={styles.radio}
                      selected={unit} 
                      onSelected={(value) => setUnit(value)} 
                      radioBackground="green" >
                      <Text style={{marginRight: 30}}>g</Text>
                    </RadioButton>
                    <RadioButton value="ml" 
                      style={styles.radio}
                      selected={unit} 
                      onSelected={(value) => setUnit(value)} 
                      radioBackground="green" >
                      <Text>ml</Text>
                    </RadioButton>
                  </View>

                  <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)} >
                      <Text style={styles.textStyle}> No </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonAdd]}
                        disabled={!name || !calories || !manufacturer || !unit ? true : false}
                        onPress={() => makeJsonProduct()} >
                      <Text style={styles.textStyle}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        borderWidth: 4,
        borderColor: '#A2A72D',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        paddingLeft: '15%',
        paddingRight: '15%',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonAdd: {
        backgroundColor: "#BE6E46",
      },
      buttonAddInactive: {
        borderColor: '#F194FF',
        borderWidth: 3,
      },
      buttonClose: {
        backgroundColor: "#586BA4",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
        width: 200,
        padding: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        marginTop: 10,
        borderRadius: 20,
        borderColor: '#3A7D44',
        textAlign: 'left',
        borderWidth: 4,
      },
      row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
      },

      radio: {
        marginLeft: 20,
      }

});