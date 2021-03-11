import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CounterView: {
    width: 300,
  },
  textCenter: {
    textAlign: 'center'
  }
});
class Counter extends Component {
  state = { count: 0};

  render(props){
    return(
      <View style={styles.CounterView}>
        <Text style={styles.textCenter}>Counted {this.state.count}{"\n"}</Text>

        <Button
          onPressIn={()=>{
            this.setState({ count: this.state.count+1});
          }}  
          title="ADD"
          color="chartreuse"
        />
      </View>
      
    );
  }
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ELO KURWA!</Text>
      <Counter />
    </SafeAreaView>
  );
}
