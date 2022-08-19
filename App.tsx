// FEATURES FUTURAS
// Criar sistema de apagar a nota (Três pontinhos?)
// Criar sistema de abrir a nota (Visualizar e Editar)
// Criar atalhos para personalizacao (Link, imagem, negrito, italico, linha, tabela...)
// Criar sistema de busca, filtro e ordenamento
// Criar sistema de selecionar ou mover as notas
// Criar sistema de tags e favoritos

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Nota from "./src/screens/Nota";
import { NotasContextProvider } from "./src/context/NotasContext";
import { RootStackProps } from "./src/interface/Screens";

const Stack = createNativeStackNavigator<RootStackProps>();

export default function App() {
  return (
    <NavigationContainer>
      <NotasContextProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#91A292" },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Notely" }}
            ></Stack.Screen>
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Nota" component={Nota} />
          </Stack.Group>
        </Stack.Navigator>
      </NotasContextProvider>
    </NavigationContainer>
  );
}
