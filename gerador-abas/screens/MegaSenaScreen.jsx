import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function MegaSena() {

  const [numerosSorteados, setNumerosSorteados] = useState([]);
  const [historico, setHistorico] = useState([]);

  function gerarNumeros() {
    const numeros = new Set();
    while (numeros.size < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      numeros.add(numero);
    }

    const sorteioAtual = Array.from(numeros).sort((a, b) => a - b);
    setNumerosSorteados(sorteioAtual);
    setHistorico([...historico, sorteioAtual]);
  }

  return (
    <View>
      <Card style={{ margin: 5 }}>
        <Card.Content>
          <Text variant="titleLarge">Gerador de Mega-Sena</Text>
          <Text variant="displayMedium">
            {numerosSorteados.length > 0 ? numerosSorteados.join(' - ') : 'Aperte para sortear'}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerarNumeros}>Sortear</Button>
        </Card.Actions>
      </Card>

      <Card style={{ margin: 5 }}>
        <Card.Content>
          <Text variant="titleMedium">Histórico:</Text>
          {historico.map((jogo, index) => (
            <Text key={index}>{jogo.join(' - ')}</Text>
          ))}
        </Card.Content>
      </Card>
    </View>
  );
}
