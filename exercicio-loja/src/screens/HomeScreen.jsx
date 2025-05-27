import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Versão com fallback
        try {
          const response = await axios.get(
            'https://dummyjson.com/products/categories',
            { timeout: 5000 } // Timeout de 5 segundos
          );
          
          if (response.data && Array.isArray(response.data)) {
            setCategorias(response.data);
          } else {
            throw new Error('Formato de dados inesperado');
          }
        } catch (apiError) {
          console.warn('Falha na API, usando dados mockados', apiError);
          // Fallback com dados mockados
          setCategorias([
            "smartphones",
            "laptops",
            "fragrances",
            "skincare",
            "groceries",
            "home-decoration"
          ]);
        }
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
        setError('Não foi possível carregar as categorias');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('ListaProdutos', { categoria: item })}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.text}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator animating={true} size="large" />
        <Text style={styles.loadingText}>Carregando categorias...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        renderItem={renderItem}
        keyExtractor={(item) => item}
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
  text: {
    textTransform: 'capitalize',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});