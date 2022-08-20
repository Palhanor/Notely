/* FEATURES FUTURAS
  1. Usar uma fonte diferente no Header
  2. Incluir visualização em blocos
  3. Abrir nota quando clicar nela
  4. Alternar entre visualização e edição
  5. Permitir salvar a nota editada
  6. Poder apagar a nota aberta
  7. Criar menu de personalização (Link, imagem, linha, negrito, italico, riscado, tabela...)
  8. Adicionar um sistema de busca
  9. Estabelcer um campo para notas favoritadas
  10. Deixar que notas sejam favoritadas ou desfavoritadas
  * Adicionar os três pontos ao lado direito do título da nota (excluir, favoritar...)
  * Adicionar limite para o tamanho do título da nota
  * Adicionar notas sem título (puxar a primeira linha ou um H1)
  * Adicionar personalização para texto selecionado
  * Adicionar uma nota inicial explicativa
  * Adicionar criação de tags
  * Adicionar atribuição de tags (cadernos?)
  * Adicionar um filtro
  * Adicionar um ordenador
  * Adicionar manipulação drag and drop
  * Adicionar seleção (multipla) de itens
  * Adicionar personalização de estilo (tamanho da fonte, familia da fonte, cor de fundo, cor da fonte, background)
  * Adicionar cores para as notas (pela tag?)
  * Adicionar uma tipografia especifica
  * Adicionar a opção de deixar a nota retrátil na Home
  * Menu da nota (?)
    * Expandir menu
    * Encolher menu
    * Visualizar
    * Editar
    * Salvar
    * Excluir
    * Adicionar (personalização)
*/

import React from "react";
import { StatusBar } from "react-native";
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
      <StatusBar backgroundColor={"#075364"} />
      <NotasContextProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
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
