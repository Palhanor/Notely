/* FEATURES FUTURAS
  1. Usar uma fonte diferente no Header
  2. Adicionar uma nota inicial explicativa
  2. Incluir visualização em blocos
  3. Implementar um sistema de busca
  4. Implementar um sistema de ordenamento (criação, modificação, alfabético)
  5. Criar menu de personalização (Link, imagem, linha, negrito, italico, riscado, tabela...)
  6. Organizar um campo para notas favoritadas (Ficam no topo)
  7. Fazer um sistema de favritar ou desfavoritar notas (Usar o menu dos cards)
  8. Menu da nota (Três pontinhos?)
    * Excluir
    * Favoritar/desfavoritar
    * Selecionar
  * Adicionar notas sem título (puxar a primeira linha ou um H1)
  * Adicionar nota incurtada na Home
  * Adicionar sistema de expansão e retração das notas na Home
  * Adicionar personalização para texto selecionado
  * Adicionar criação de tags (Ou cadernos?)
  * Adicionar atribuição de tags (Ou cadernos?)
  * Adicionar suporte a check-list com markdown
  * Adicionar o check de itens do check-list no markdown
  * Adicionar a exibição do markdown de forma simultânea
  * Adicionar sistema para criar nota direto da Home
  * Adicionar um filtro
  * Adicionar manipulação drag and drop
  * Adicionar seleção (multipla) de itens
  * Adicionar personalização de estilo (tamanho da fonte, familia da fonte, cor de fundo, cor da fonte, background)
  * Adicionar cores para as notas (Pela tag? Por nota?)
  * Adicionar uma tipografia personalizada para o app
  * Menu de criação da nota (?)
    * Expandir menu
    * Encolher menu
    * Visualizar
    * Editar
    * Salvar
    * Excluir
    * Adicionar (personalização)
*/

import React from "react";
import Home from "./src/screens/Home";
import Nota from "./src/screens/Nota";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
