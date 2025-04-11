import { StyleSheet, View, ScrollView, FlatList } from 'react-native'
import { Text, Card, Title } from 'react-native-paper'
import React from 'react'

const titulos = [
    {
    nome: "Campeonato Brasileiro",
    anos: [1960, 1967, 1967, 1969, 1972, 1973, 1993, 1994, 2016, 2018, 2022, 2023]
    },
    {
    nome: "Copa Libertadores da América",
    anos: [1999, 2020, 2021]
    },
    {
    nome: "Copa do Brasil",
    anos: [1998, 2012, 2015, 2020]
    },
    {
    nome: "Supercopa do Brasil",
    anos: [2023]
    },
    ];

export default function TitulosScreen() {
  return (
    <ScrollView>
    <View>
      {titulos.map((titulos, index) => (
        <Card key={index} style={{ margin: 10 }}>
            <Card.Content>
                <Title>{titulos.nome}</Title>
            </Card.Content>
            <Card.Actions>
            <FlatList
                data={titulos.anos}
                horizontal
                renderItem={({ item }) => (
                  <View style={{ padding: 8, marginRight: 5, backgroundColor: '#eee', borderRadius: 8 }}>
                    <Text>{item}</Text>
                  </View>
                )}
              />
            </Card.Actions>
        </Card>
      ))}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})