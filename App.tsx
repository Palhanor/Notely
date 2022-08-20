/* AJEITAR PROBLEMAS
  1. Corrigir o estilo da visualização da nota na aba Nota
  2. Corrigir o estilo da visualização da nota na aba Home
  3. Criar os estilos globais para a exibição dos cards
  4. Adicionar uma tipografia especifica
  5. Criar um Header estilizado
*/

/* FEATURES FUTURAS
  1. Incluir visualização em blocos
  2. Abrir nota quando clicar nela
  3. Alternar entre visualização e edição
  4. Permitir salvar a nota editada
  5. Poder apagar a nota aberta
  6. Criar menu de personalização (Link, imagem, linha, negrito, italico, riscado, tabela...)
  7. Adicionar um sistema de busca
  8. Estabelcer um campo para notas favoritadas
  9. Deixar que notas sejam favoritadas ou desfavoritadas
  * Adicionar uma nota inicial explicativa
  * Adicionar criação de tags
  * Adicionar atribuição de tags (cadernos?)
  * Adicionar um filtro
  * Adicionar um ordenador
  * Adicionar manipulação drag and drop
  * Adicionar seleção (multipla) de itens
  * Adicionar personalização de estilo (tamanho da fonte, familia da fonte, cor de fundo, cor da fonte, background)
  * Adicionar cores para as notas (pela tag?)
*/

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
            headerStyle: { backgroundColor: "#0E677A" },
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
