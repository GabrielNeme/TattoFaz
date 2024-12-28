import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from './src/screens/components/TabBarIcon';
import LoginScreen from './src/screens/login/Login';
import CadastroScreen from './src/screens/cadastro/Cadastro';
import FeedScreen from './src/screens/feed/Feed';
import BuscaScreen from './src/screens/busca/busca';
import AgendamentoScreen from './src/screens/agendamento/Agendamento';
import PerfilScreen from './src/screens/perfil/Perfil';
import RealistaScreen from './src/screens/realista/realista';
import OrientalScreen from './src/screens/oriental/Oriental';
import TribalScreen from './src/screens/tribal/Tribal';
import TatuadoresScreen from './src/screens/tatuadores/selecionarTatuadores';
import TattooBookingScreen from './src/screens/agendData/agenData';

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0000',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#000',
          height: 72,
          paddingBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='Feed'
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Busca'
        component={BuscaScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'search' : 'search-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Agendamento'
        component={AgendamentoScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'calendar' : 'calendar-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          ),
        }}
      />
      {/* Adicione outras telas no Tab Navigator, se necessário */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cadastro'
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='MainTabs'
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Perfil'
          component={PerfilScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='realista'
          component={RealistaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Oriental'
          component={OrientalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Tribal'
          component={TribalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Tatuadores'
          component={TatuadoresScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='TattooBookingScreen'
          component={TattooBookingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
