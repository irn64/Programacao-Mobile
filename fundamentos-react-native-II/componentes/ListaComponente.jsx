import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const listaCarros = ["Gol", "Palio", "Celta", "Uno", "Civic"]


  return (
    <View style={styles.conteiner}>

        {/*Resolve o problema de Warning*/}
        {listaCarros.map((carro, index) => <Text key={index} >{carro}</Text>)}
      
        {listaCarros.map((carro) => <Text>{carro}</Text>)}

        {     
            listaCarros.map(
                (carro) => {
                    return (
                        <View style={styles.conteinerAmarelo}>
                            <Text>{carro}</Text>
                        </View>
                    )
                    
                }
                
            )
        }


    </View>
  )
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: 'red',
        borderWidth: 5,
        padding: 10
    },
    conteinerAmarelo: {
        backgroundColor: "yellow",
        borderWidth: 5,
        padding: 10
    }
})