import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import OutraScreen from './src/screens/OutraScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import ConfigScreen from './src/screens/ConfigScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() { 
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />}}/>
      <Tab.Screen name="Receitas" component={HomeScreen} options={{tabBarIcon: ({color, size}) => <Ionicons name='restaurant' color={color} size={size} />}}/>
      <Tab.Screen name="Config" component={ConfigScreen} options={{tabBarIcon: ({color, size}) => <Ionicons name='options' color={color} size={size} />}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="OutraScreen" component={OutraScreen} />
        <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}