import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button} from 'react-native-paper'

export default function NumeroAleatorio() {

    const [NumeroAleatorio, setNumeroAleatorio] = useState

    function gerar(){
        const numeroGerado = Math.round(Math.random() * 101)
        setNumeroAleatorio(numeroGerado)
        setListaNumeros([...ListaNumeros, numeroGerado])
    }

  return (
    <View>
      <Card style={{ margin: 5 }}>
        <Card.Content>
            <Text>Gerador de número aleatório</Text>
            <Text variant='displayMedium'>Número: {NumeroAleatorio}</Text>
        </Card.Content>

        <Card.Actions>
            <Button onPress={gerar}>Gerar</Button>
        </Card.Actions>
        <Card.Content>
            {listaNumeros.map(numero => <text>{numero}</text>)}
        </Card.Content>
      </Card>
    </View>
  )
}
