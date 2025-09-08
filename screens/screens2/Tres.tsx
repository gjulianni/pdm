import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList } from "../types";
import Icon from "react-native-vector-icons/Ionicons";

import Um from "../Um";
import Dois from "../Dois";
import Tres from "../Tres";
import Quatro from "../Quatro";
import Cinco from "../Cinco";
import Seis from "../Seis";
import Sete from "../Sete";
import Oito from "../Oito";
import Nove from "../Nove";
import Dez from "../Dez";

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Um"
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: "#1976D2",
          drawerLabelStyle: { fontSize: 16 }
        }}
      >
        <Drawer.Screen
          name="Um"
          component={Um}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Dois"
          component={Dois}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="book" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Tres"
          component={Tres}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Quatro"
          component={Quatro}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="star" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Cinco"
          component={Cinco}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Seis"
          component={Seis}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="planet" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Sete"
          component={Sete}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="film" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Oito"
          component={Oito}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="game-controller" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Nove"
          component={Nove}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="musical-notes" color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="Dez"
          component={Dez}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="cafe" color={color} size={size} />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}