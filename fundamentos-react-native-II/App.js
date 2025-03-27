import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <Perfil
        nome= "Gabriel"
        idade= {19}
        telefone= "983425527"
        email= "gydiwqgd@gmail.com"
       />

      <Perfil
        nome= "Sara"
        idade= {19}
        telefone= "982516383"
        email= "eyeuasia@gmail.com"
       />

      <Perfil
        nome= "Joao"
        idade= {30}
        telefone= "73829101223"
        email= "aaaaaaa@gmail.com"
       /> */}

       <ListaComponente />
      
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
