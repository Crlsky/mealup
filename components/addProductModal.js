import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Pressable, TextInput } from 'react-native';
import RadioButton from 'expo-radio-button'




export default function ProductModal({modalVisible, setModalVisible, ean}) {
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
        fetch('http://memecloud.co:8081/classes/ajax/insertProduct.php',{
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
                  <Text style={styles.modalText}>Product no found!</Text>
                  <Text style={styles.modalText}>Would you like to help us and add this product to database? It will take less than 3 min.</Text>

                    {/* name input */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="nazwa"
                    />
                    {/* manufacturer input */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeManufacturer}
                        value={manufacturer}
                        placeholder="producent"
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
                      selected={unit} 
                      onSelected={(value) => setUnit(value)} 
                      radioBackground="green" >
                      <Text>g</Text>
                    </RadioButton>
                    <RadioButton value="ml" 
                      selected={unit} 
                      onSelected={(value) => setUnit(value)} 
                      radioBackground="green" >
                      <Text>ml</Text>
                    </RadioButton>
                  </View>

                  <View style={styles.row}>
                    <Pressable
                        style={[styles.button, styles.buttonAdd]}
                        disabled={name && calories && manufacturer ? false : true}
                        onPress={() => makeJsonProduct()}
                    >
                    <Text style={styles.textStyle}>Add</Text>
                    </Pressable>

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>No, thanks</Text>
                    </Pressable>
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
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonAdd: {
        backgroundColor: "#F194FF",
      },
      buttonAddInactive: {
        borderColor: '#F194FF',
        borderWidth: 3,
      },
      buttonClose: {
        backgroundColor: "#2196F3",
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
        backgroundColor: 'purple',
        width: 250,
        padding: 5,
      },
      row: {
        display: 'flex',
        flexDirection: 'row',
      }

});