import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, } from 'react-native';

export default function App() {

  function alerta() {
    alert("Andreas escorregou e o Palmeiras é campeão da Libertadores!")
  }

  return (
    <ScrollView>
      
    <View style={styles.container}>
    
      <Text style={{fontSize: 40, color: '#006437'}}>Socieade Esportiva</Text>
      <Text style={{fontSize: 40, color: '#006437'}}>Palmeiras</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title='Clique Aqui!' onPress={alerta}></Button>
      <Text></Text>
      <Text>    O Palmeiras é um time paulista criado por membros da comunidade italiana no começo do século XX, no bairro do Brás, na cidade de São Paulo. Possui conquistas estaduais, nacionais e internacionais, como as Libertadores de 1999, 2020 e 2021. Entre os ídolos do Palmeiras, podemos citar os pentacampeões Cafu e Marcos.</Text>
      <Text></Text>
      <Image 
      source={require('./imagens/palestra.png')}
      style={{
        height:200,
        width: 300
      }}
      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>    O Palmeiras é um dos poucos times com dois mascotes, que são o periquito e o porco. O estádio do Palmeiras é o Allianz Parque, situado na zona central da cidade de São Paulo.</Text>
      <Text></Text>
      <Image 
      source={require('./imagens/priquito.png')}
      style={{
        height:200,
        width: 300
      }}
      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>    Os principais títulos do Palmeiras são:

Copa Libertadores: 1999, 2020, 2021.

Copa Mercosul: 1998.

Recopa Sul-Americana: 2022.

Campeonato Brasileiro: 1960, 1967, 1967 (Taça Brasil), 1969, 1972, 1973, 1993, 1994, 2016, 2018, 2022 e 2023.

Copa do Brasil: 1998, 2012, 2015, 2020.

Supercopa do Brasil: 2023.

Copa dos Campeões: 2000.

Torneio Rio-São Paulo: 1933, 1951, 1965, 1993, 2000.

Campeonato Paulista: 1920, 1926, 1926 (Extra), 1927, 1932, 1933, 1934, 1936, 1938 (Extra), 1940, 1942, 1944, 1947, 1950, 1959, 1963, 1966, 1972, 1974, 1976, 1993, 1994, 1996, 2008, 2020, 2022, 2023.</Text>
      <Text></Text>
      <Image 
      source={require('./imagens/cheirinho.png')}
      style={{
        height:200,
        width: 300
      }}
      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>    Estes são alguns dos principais ídolos do Palmeiras:

Ademir da Guia: meio-campo com 902 jogos (513 vitórias, 233 empates e 156 derrotas).

César Maluco: atacante com 327 jogos (171 vitórias, 93 embates e 63 derrotas).

Dudu: volante com 615 jogos (345 vitórias, 160 empates e 110 derrotas).

Junqueira: zagueiro com 337 jogos (211 vitórias, 73 empates e 53 derrotas).

Marcos: goleiro com 533 jogos (257 vitórias, 146 empates e 130 derrotas).</Text>
      <Text></Text>
      <Image 
      source={require('./imagens/marcao.png')}
      style={{
        height:200,
        width: 300
      }}
      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>    O estádio do Palmeiras foi comprado em 1920 por 500 contos de réis, uma fortuna na época. Hoje em dia, ele suporta 43.713 pessoas em dia de jogo e 55 mil para shows.</Text>
      <Text></Text>
      <Image 
      source={require('./imagens/malditao.png')}
      style={{
        height:200,
        width: 300
      }}
      />
      <Text></Text>




      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4B465',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});
