import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from "../screens/HomeScreen"
import OutraScreen from '../screens/OutraScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='OutaScreen' component={OutraScreen} />
    </Stack.Navigator>
  )
}