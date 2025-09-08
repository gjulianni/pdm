import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList } from "./types";
import CepScreen from "./CepScreen";
import { CepProvider } from "./contexts/CepContext";
import ConsultasScreen from "./ConsultasScreen";

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Cep">
          <Drawer.Screen name="Cep" component={CepScreen} />
          <Drawer.Screen name="Consultas" component={ConsultasScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
}