// Problema com Non-serializeble values (passando uma funcao como parametro)
// Problema com a atribuicao do Id (O Id esta sendo igual e o key de cada card tambem)
// Problema com a tipagem dos sistemas de rota

// Criar sistema de busca, filtro e ordenamento
// Criar sistema de selecionar ou mover as notas
// Criar sistema de tags
// Criar atalhos para personalizacao (link, imagem, negrito, italico, linha, tabela...)

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Nota from "./src/screens/Nota";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
            options={{ title: "Notelly" }}
          ></Stack.Screen>
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Nota" component={Nota} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
