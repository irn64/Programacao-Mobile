import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente'
import SegundoComponente from './componentes/SegundoComponente'
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';


export default function App() {
  return (
    <View style={styles.container}>
      
      <PrimeiroComponente />
      <SegundoComponente />
      <JavascriptComponente />
      <Perfil 
        nome="Gabriel"
        sobrenome="Rodrigues"
        idade={30}
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
