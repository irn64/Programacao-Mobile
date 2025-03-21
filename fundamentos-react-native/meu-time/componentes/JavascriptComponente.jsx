import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
  const nome = "Neymar"
  const idade = 34

  function exibirNome() {
    return nome
  }
  function checarMaiorIdade() {
    if(idade >=10){
        return "Maior de Idade"
    } else {
        return "Menor de Idade"
    }
  }


  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>nome: {exibirNome()}</Text>
      <Text>Resultado: {25 + 31}</Text>
      <Text>Idade : {idade + 20}</Text>
      <Text>Check 18+: {checarMaiorIdade()}</Text>
      <Text>Check 18+: {idade >= 18 ? "Maior de idade" : "Menor de idade"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})