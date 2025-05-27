import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'


import HomeScreen from '../screens/HomeScreen'
import ListaProdutosScreen from '../screens/ListaProdutosScreen'
import ProdutoScreen from '../screens/ProdutoScreen'

const Stack = createStackNavigator()

export default function Stackroutes() {
  return (
    <Stackroutes>
        <Stack.screens
        name='HomeScreen'
        component={HomeScreen}
        options={{
                title: "Lista de Usuários",
                headerTitleAlign: 'center'
        }}
        />
        <Stack.screens
        name='ListaProdutosScreen'
        component={ListaProdutosScreen}
        options={{
                title: "Lista de Usuários",
                headerTitleAlign: 'center'
        }}
        />
        <Stack.screens
        name='ProdutoScreen'
        component={ProdutoScreen}
        options={{
                title: "Lista de Usuários",
                headerTitleAlign: 'center'
        }}
        />
    </Stackroutes>
  )
}
