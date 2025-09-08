import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList } from "../types";

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
      <Drawer.Navigator initialRouteName="Um">
        <Drawer.Screen name="Um" component={Um} />
        <Drawer.Screen name="Dois" component={Dois} />
        <Drawer.Screen name="Tres" component={Tres} />
        <Drawer.Screen name="Quatro" component={Quatro} />
        <Drawer.Screen name="Cinco" component={Cinco} />
        <Drawer.Screen name="Seis" component={Seis} />
        <Drawer.Screen name="Sete" component={Sete} />
        <Drawer.Screen name="Oito" component={Oito} />
        <Drawer.Screen name="Nove" component={Nove} />
        <Drawer.Screen name="Dez" component={Dez} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}