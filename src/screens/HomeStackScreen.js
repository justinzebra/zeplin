import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
const Stack = createStackNavigator();
const HomeStackScreen = ({navigation}) => {
  return (
    
   
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} 
   
    />
  </Stack.Navigator>
    
    
  );
};


const styles = StyleSheet.create({
   
});

export default HomeStackScreen;