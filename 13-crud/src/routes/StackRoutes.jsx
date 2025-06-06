import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import AlunoLista from '../screens/AlunoLista'
import AlunoForm from '../screens/AlunoForm'

const Stack = createStackNavigator()

export default function Stackroutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AlunoLista'
        component={AlunoLista}
        options={{
          title: "Lista de Alunos",
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name='AlunoForm'
        component={AlunoForm}
        options={{
          title: "",
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  )
}