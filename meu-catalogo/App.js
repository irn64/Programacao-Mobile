import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Filme from './Componentes/Filme';
import Series from './Componentes/Series';

export default function App() {
  const listaFilmes = [
    {
    nome: "A Doce Vida",
    ano: 1960,
    diretor: "Federico Fellini",
    tipo: "Drama",
    capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
    },
    {
    nome: "Psicose",
    ano: 1960,
    diretor: "Alfred Hitchcock",
    tipo: "Terror",
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/1200px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg"
    },
    {
    nome: "O Beijo da Mulher Aranha",
    ano: 1985,
    diretor: "Hector Babenco",
    tipo: "Drama",
    capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
    },
    {
    nome: "Poltergeist - O Fenômeno",
    ano: 1982,
    diretor: "Tobe Hooper",
    tipo: "Terror",
    capa: "https://upload.wikimedia.org/wikipedia/pt/1/14/Poltergeist_%281982%29_-_poster.png"
    }
    
    ];
    const listaSeries = [
    {
    nome: "Buffy, a Caça-Vampiros",
    ano: 1997,
    diretor: "Joss Whedon",
    temporadas: 7,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeahwVSODEinHaxNlcQhCYGRHOPk0nVhClw&s'
    },
    {
    nome: "Desperate Housewives",
    ano: 2004,
    diretor: "Marc Cherry",
    temporadas: 8,
    capa: "https://m.media-amazon.com/images/I/71OJUEof8WL._AC_UF894,1000_QL80_.jpg"
    },
    {
    nome: "Sons of Anarchy",
    ano: 2008,
    diretor: "Kurt Sutter",
    temporadas: 7,
    capa: "https://m.media-amazon.com/images/M/MV5BZWNiZjFiNGEtNGZmMS00YTBlLWJlNmQtZTA2NzEzZWE4ZGQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    }
    ];


  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text></Text>
      <Text></Text>
      <Text></Text>
      {
        listaFilmes.map(
          filme => {
            return (
              <Filme 
                nome={filme.nome}
                ano={filme.ano}
                diretor={filme.diretor}
                tipo={filme.tipo}
                capa={filme.capa}
              />
            )
          }
        )
      }
      <Text></Text>
      <Text></Text>
      <Text></Text>
      {
        listaSeries.map(
          series => {
            return (
              <Series 
                nome={series.nome}
                ano={series.ano}
                diretor={series.diretor}
                temporadas={series.temporadas}
                capa={series.capa}
              />
            )
          }
        )
      }



      <StatusBar style="dark" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
