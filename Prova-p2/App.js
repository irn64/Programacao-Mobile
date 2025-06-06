import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Telas
import HomeScreen from './src/screens/HomeScreen';
import OutraScreen from './src/screens/OutraScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import ConfigScreen from './src/screens/ConfigScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Componente das Abas
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

// Navegação Principal (Stack + Tab)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Telas com Abas */}
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }} // Oculta o header do Stack
        />
        {/* Telas "fullscreen" (sem abas) */}
        <Stack.Screen name="OutraScreen" component={OutraScreen} />
        <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}