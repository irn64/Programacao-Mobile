import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title } from 'react-native-paper'
import React from 'react'

const time = {
    nome: "Palmeiras",
    escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/2048px-Palmeiras_logo.svg.png",
    };

export default function EscudoScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>

      <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Escudo do Palmeiras</Text>

      <Card style={{ margin: 10 }}>
              <Card.Content>
                  <Title style={{alignSelf: 'center'}}>Escudo</Title>
                  
              </Card.Content>
              <Card.Cover style={{width: 300, height: 300, alignSelf: 'center'}} source={{ uri: time.escudo }} />
            </Card>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})