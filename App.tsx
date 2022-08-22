/* BIBLIOTECAS INÚTEIS
 * "@expo-google-fonts/josefin-sans": "^0.2.2",
 * "expo-app-loading": "~2.0.0",
 * "expo-font": "~10.1.0",
 * "expo-status-bar": "~1.3.0",
 * "react-native-safe-area-context": "4.2.4",
 * "react-native-screens": "~3.11.1",
 * "react-native-web": "0.17.7",
 * "react-native-webview": "11.18.1",
 * "expo-splash-screen": "~0.15.1",
 */

/* FEATURES FUTURAS
  1. Incluir visualização em blocos
  2. Implementar um sistema de busca
  3. Implementar um sistema de ordenamento (Data de criação, data de modificação, alfabético)
  4. Criar menu de personalização (Link, imagem, linha, negrito, italico, riscado, tabela...)
  5. Organizar um campo para notas favoritadas (Ficam no topo)
  6. Fazer um sistema de favritar ou desfavoritar notas (Usar o menu dos cards) 
  7. Menu da nota (Três pontinhos?)
    * Excluir
    * Favoritar/desfavoritar
    * Selecionar
  * Adicionar uma lixeira para onde vão as notas apagadas
  * Adicionar sistema de expansão e retração das notas na Home (Pressionar nota)
  * Adicionar personalização para texto selecionado
  * Adicionar criação de tags (Ou cadernos?)
  * Adicionar atribuição de tags (Ou cadernos?)
  * Adicionar suporte a check-list com markdown
  * Adicionar o check de itens do check-list no markdown
  * Adicionar a exibição do markdown de forma simultânea
  * Adicionar sistema para criar nota direto da Home
  * Adicionar um filtro (tags, datas...)
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

/* PROBLEMAS DO INTERPRETADOR
  1. Não pega multiplas quebras de linha
  2. Não dá margem superior ou inferior na linha horizontal
  3. Precisa de uma separação entre a linha horizontal e o texto anterior
  4. Não reconhece o check-list (- [])
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
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Notely" }}
          ></Stack.Screen>
          <Stack.Screen name="Nota" component={Nota} />
        </Stack.Navigator>
      </NotasContextProvider>
    </NavigationContainer>
  );
}
