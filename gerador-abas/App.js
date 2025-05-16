import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MegaSena" component={MegaSenaScreen} />
        <Tab.Screen name="Jogo Do Bicho" component={JogoDoBichoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

