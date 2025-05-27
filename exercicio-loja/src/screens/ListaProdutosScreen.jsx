import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(response => {
        setProdutos(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [categoria]);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Produto', { idProduto: item.id })}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Image 
            source={{ uri: item.thumbnail }} 
            style={styles.image}
            resizeMode="contain"
          />
          <Text variant="titleLarge">{item.title}</Text>
          <Text variant="bodyMedium">Preço: ${item.price}</Text>
          <Text variant="bodySmall" numberOfLines={2}>{item.description}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando produtos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    margin: 5,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
});