import { View, Text } from 'react-native'
import React from 'react'
import Routing from './src/configs/Routing'

import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
      <Routing/>
    </NavigationContainer>
    )
}