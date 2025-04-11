import { StyleSheet, View, ScrollView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

const jogadores = [
    {
    nome: "Raphael Veiga",
    numero: 23,
    imagem: "https://www.zerozero.pt/img/jogadores/new/06/15/470615_raphael_veiga_20240426201221.png"
    },
    {
    nome: "Felipe Anderson",
    numero: 7,
    imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=850,quality=75,format=webp/uploads/2024/07/53851129659_0cddc79fb2_h.jpg"
    },
    {
    nome: "Vitor Roque",
    numero: 9,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5tdw-XqN63M8lklm1Cvij1rvl1lCTReg_A&s"
    },
    {
    nome: "Gustavo Gomez",
    numero: 15,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcDLt0ZmZqdF7O9uu1GyqqhzVIXFUdUnatg&s"
    },
    {
    nome: "Lucas Estevão",
    numero: 41,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Estevao-Palmeiras-Criciuma-sep24-6_%28cropped%29.jpg"
    },
    ];

export default function JogadoresScreen() {
  return (
    <ScrollView>
    <View>
        {jogadores.map((jogadores, index) => (
            <Card key={index} style={{ margin: 10 }}>
                <Card.Content>
                    <Title>{jogadores.nome}</Title>
                    <Paragraph>Número: {jogadores.numero}</Paragraph>
                </Card.Content>
                <Card.Cover style={{width: 300, height: 300, alignSelf: 'center'}} source={{ uri: jogadores.imagem }} />
            </Card>
            ))}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})