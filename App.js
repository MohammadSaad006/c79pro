
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import DailyPicScreen from './screens/DailyPicScreen'
import  SpacecraftScreen from './screens/SpacecraftScreen'
import  StarMapScreen from './screens/StarMapScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator()
export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerShown:false

    }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
     <Stack.Screen name="DailyPicScreen" component={DailyPicScreen}/>
      <Stack.Screen name="SpacecraftScreen" component={SpacecraftScreen}/>
       <Stack.Screen name="StarMapScreen" component={StarMapScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
