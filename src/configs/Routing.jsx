import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
const Stack = createNativeStackNavigator();

export default function Routing() {
  return (
        <Stack.Navigator initialRouteName={"signup"} screenOptions={{headerShown:false}}>
        <Stack.Screen name={"signup"} component={Signup}/>
        <Stack.Screen name={"login"} component={Login}/>
        <Stack.Screen name={"forgot"} component={Forgot}/>
        </Stack.Navigator>
  )
}