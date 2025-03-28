import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Series(props) {

    const {nome, ano, diretor, temporadas, capa} = props

  return (
    <View style={styles.conteiner}>


      <Text style={styles.texto}>Series</Text>

      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Ano: {ano}</Text>
      <Text style={styles.texto}>Diretor: {diretor}</Text>
      <Text style={styles.texto}>Temporadas: {temporadas}</Text>
      <Text style={styles.texto}>Capa: {capa}</Text>

      <Image 
        source= {{
            uri: capa
        }}
        style={{
            height: 450,
            width: 300
        }}
      />

    </View>
  )
}


const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: "#F2EFE7",
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