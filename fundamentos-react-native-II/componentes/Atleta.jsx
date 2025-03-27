import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Atleta(props) {

    const {nome, idade, numero, imagem} = props

  return (
    <View style={styles.conteiner}>


      <Text style={styles.texto}>Atleta</Text>

      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Numero: {numero}</Text>

      <Image 
        source= {{
            uri: imagem
        }}
        style={{
            height: 200,
            width: 200
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: "yellow",
        borderWidth: 10,
        padding: 5,
        alignItems: 'center',
        flex: 1
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})