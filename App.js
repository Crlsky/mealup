
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Scanner from './screens/scanner';
import Category from './screens/category';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: false }}/>
        <Stack.Screen name="Category" component={Category} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 40
  }
}
