import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';

export default class SpacecraftScreen extends React.Component{
    render(){
        return(
          <View 
          style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
          }}>
            <Text>SpaceCraftScreen</Text>
            </View>
        )
    }
}