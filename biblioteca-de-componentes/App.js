import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Flatlist } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider} from 'react-native-paper'

export default function App() {

  const listaCards = [
    {
      titulo: "Card 1",
      descricao: "Lorem Ipsun, Lorem Ipsun, Lorem Ipsun, Lorem Ipsun, Lorem Ipsun",
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg533J0TIP7a6z-C_XrSUTz2SKBXxPKRiTyA&s'
    },
    {
      titulo: "Card 1",
      descricao: "Lorem Ipsun, Lorem Ipsun, Lorem Ipsun, Lorem Ipsun, Lorem Ipsun",
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg533J0TIP7a6z-C_XrSUTz2SKBXxPKRiTyA&s'
    },
    {
      titulo: "Card 1",
      descricao: "Lorem Ipsun, Lorem Ipsun, Lorem Ipsun, Lorem Ipsun, Lorem Ipsun",
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg533J0TIP7a6z-C_XrSUTz2SKBXxPKRiTyA&s'
    },
    {
      titulo: "Card 1",
      descricao: "Lorem Ipsun, Lorem Ipsun, Lorem Ipsun, Lorem Ipsun, Lorem Ipsun",
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg533J0TIP7a6z-C_XrSUTz2SKBXxPKRiTyA&s'
    }
  ]

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style='auto' />

        <Flatlist 
          data={listaCards}
          renderItem={({item}) => (
            <Card>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
              </Card.Content>
              <Card.Cover source={{uri: item.imagem}} />
            </Card>
          )}
        />

      </View>
       </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});
