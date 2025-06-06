import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function AlunoLista(navigation) {

    const [alunos, setAlunos] = useState([
        {
            id: '1',
            nome: 'Gustavo',
            cpf: '001-110-111-20',
            email: 'gustavo@gmail.com',
            telefone: '92928383',
            dataNascimento: '02/02/02'
        }
    ])

  return (
    <View>
      
    </View>
  )
}

const styles = StyleSheet.create({})