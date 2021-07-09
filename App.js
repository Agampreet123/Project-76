import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/Home'
import SpaceCraftsScreen from './Screens/SpaceCraft'
import StarMapScreen from './Screens/StarMap'
import DailyPicScreen from './Screens/DailyPic'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export default class App extends React.Component {
  render(){
  return (
    
       <NavigationContainer>
   <stack.Navigator initialRouteName = "Home" screenOptions={{headerShown:false}}>
   <stack.Screen name="Home" component={HomeScreen}/>
   <stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
   <stack.Screen name="StarMap" component={StarMapScreen}/>
   <stack.Screen name="DailyPic" component={DailyPicScreen}/>
   </stack.Navigator>
   </NavigationContainer>
   
  );
}
}
