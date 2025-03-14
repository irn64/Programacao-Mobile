// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// Componente principal
// Ele deve retornar o que será renderizado na tela (Templete feito com JSX)
export default function App() {
  // Lógica do meu componente
const nome = "Gabriel"

function alerta() {
  alert("Você clicou no botão")
}

  // Rotorno com JSX
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      {/* Comentário dentro do template JSX */}

      {/* Código JavaScript */}
    <Text>{2 + 2}</Text>
    <Text>{nome}</Text>


      <Text>É isso ai</Text>
      <Button title='Alerta' onPress={alerta}></Button>
      
      <Image 
      source={{uri: 'https://agorarn.com.br/files/uploads/2023/03/Neymar-930x524.jpg'}}
      style= {{
        height: 300,
        width: 300,
      }}
      />
      
    </View>
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
