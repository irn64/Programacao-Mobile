// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

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

    <ScrollView>

    <View style={styles.container}>
    <StatusBar style="auto" />


      {/* Código JavaScript */}
    <Text>{2 + 2}</Text>
    <Text>{nome}</Text>


      <Text style={{ fontSize: 40 }}>É isso ai</Text>
      <Text style={styles.textoGrande}>Eai minha rapaziada</Text>

      <Button title='Alerta' onPress={alerta}></Button>
      
      <Image 
        source={{uri: 'https://agorarn.com.br/files/uploads/2023/03/Neymar-930x524.jpg'}}
        style= {{
          height: 300,
          width: 300,
      }}
      />

      <Image 
        source={require('./Imagens/neyma.png')}
        style= {{
          height: 300,
          width: 300,
      }}
      />
      
    </View>
    </ScrollView>
  );
}
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontFamily: 'italic'
  }
});
