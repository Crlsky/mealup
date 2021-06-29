import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



export default function ProductModal({modalVisible, setModalVisible}) {
    const [name, onChangeName] = useState(null);
    const [manufacturer, onChangeManufacturer] = useState(null);
    const [calories, onChangeCalories] = useState(null);
    const dataRadio = [
        {
          label: 'ml',
          accessibilityLabel: 'ml'
         },
         {
          label: 'g',
          accessibilityLabel: 'g'
         }
        ];



    const saveNewProduct = (jsonProduct) => {
        fetch('http://memecloud.co:8081/classes/ajax/insertProduct.php',{
            headers: {

            },
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
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
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
                    />
                    {/* manufacturer input */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeManufacturer}
                        value={manufacturer}
                    />
                    {/* calories input / 100 units */}
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeCalories}
                        value={calories}
                        keyboardType="numeric"
                    />
                    {/* unit radioInput  */}


                    <Pressable
                        style={[styles.button, styles.buttonAdd]}
                        disabled={name && calories && manufacturer ? false : true}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Add</Text>
                    </Pressable>

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>No</Text>
                    </Pressable>
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
      }

});