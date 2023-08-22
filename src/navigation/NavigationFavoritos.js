import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Favoritos from '../screen/Favoritos';

export default function NavigationFavoritos() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favoritos' component={Favoritos} options={{title:"Favoritos",
        headerStyle:{
          backgroundColor:"#2D3A3A"},
        headerTintColor:"#fff",
        }}/>
    </Stack.Navigator>
  )
}