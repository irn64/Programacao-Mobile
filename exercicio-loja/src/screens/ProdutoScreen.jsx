import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => {
        setProduto(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [idProduto]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando produto...</Text>
      </View>
    );
  }

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Image 
          source={{ uri: produto.thumbnail }} 
          style={styles.mainImage}
          resizeMode="contain"
        />
        <Card.Content>
          <Text variant="headlineMedium" style={styles.title}>
            {produto.title}
          </Text>
          <Text variant="titleLarge" style={styles.price}>
            ${produto.price}
          </Text>
          <Text variant="bodyMedium" style={styles.discount}>
            Desconto: {produto.discountPercentage}% off
          </Text>
          <Text variant="bodyMedium" style={styles.rating}>
            Avaliação: {produto.rating}/5
          </Text>
          <Text variant="bodyMedium" style={styles.stock}>
            Em estoque: {produto.stock} unidades
          </Text>
          <Text variant="bodyMedium" style={styles.brand}>
            Marca: {produto.brand}
          </Text>
          <Text variant="bodyMedium" style={styles.category}>
            Categoria: {produto.category}
          </Text>
          <Text variant="bodyLarge" style={styles.description}>
            {produto.description}
          </Text>
        </Card.Content>
      </Card>

      <Text variant="titleMedium" style={styles.sectionTitle}>
        Mais imagens
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {produto.images.map((image, index) => (
          <Image 
            key={index}
            source={{ uri: image }} 
            style={styles.galleryImage}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 20,
  padding: 10,
  },
  mainImage: {
    width: '100%',
    height: 300,
    marginBottom: 15,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    marginBottom: 10,
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discount: {
    color: 'red',
    marginBottom: 5,
  },
  rating: {
    color: 'orange',
    marginBottom: 5,
  },
  stock: {
    marginBottom: 5,
  },
  brand: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontStyle: 'italic',
    marginBottom: 15,
  },
  description: {
    lineHeight: 22,
  },
  sectionTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
});