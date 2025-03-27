import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
    // lógico do componente
    const nome = "Gabriel"
    const idade= 19

    function checarMaiorIdade() {
        console.log('Chamou a função')
        if(idade >=18){
            return "Maior de idade"
        } else {
            return "Menor de idade"
        }
    }

    function alerta(){
        alert('Voce clicou no botão')
    }



    // retorno do jsx
  return (
    <View style={styles.container}>



      <Text style={styles.texto}>JavaScriptComponente</Text>
      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>{idade}</Text>
      <Text style={styles.texto}>{idade + 40}</Text>
      <Text style={styles.texto}>18+: {checarMaiorIdade()}</Text>

      <Button title='enviar' onPress={alerta}/>



    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})