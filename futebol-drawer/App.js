import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Escudo"
          screenOptions={({ route }) => ({
            drawerIcon: ({ color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Escudo':
                  iconName = 'shield';
                  break;
                case 'Jogadores':
                  iconName = 'people';
                  break;
                case 'Títulos':
                  iconName = 'trophy';
                  break;
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            }
          })}
        >
          <Drawer.Screen name="Escudo" component={EscudoScreen} />
          <Drawer.Screen name="Jogadores" component={JogadoresScreen} />
          <Drawer.Screen name="Títulos" component={TitulosScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}