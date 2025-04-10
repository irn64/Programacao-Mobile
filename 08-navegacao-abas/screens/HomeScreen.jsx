import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>

      <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Inicio</Text>

      <Card style={{ margin: 10 }}>
        <Card.Content>
            <Title>Um titulo</Title>
            <Paragraph>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>

      <Card style={{ margin: 10 }}>
        <Card.Content>
            <Title>Um titulo</Title>
            <Paragraph>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>

      <Card style={{ margin: 10 }}>
        <Card.Content>
            <Title>Um titulo</Title>
            <Paragraph>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fff',
        alignItems: 'center'
    }
})