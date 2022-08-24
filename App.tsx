/* FEATURES DE CURTO PRAZO
  1. Sistema de ordenamento
    1.1. Pegar o valor selecionado com o toque
    1.2. Atualizar o estado de acordo com o valor selecionado
    1.3. Modificar visualmente o item selecionado na lista
    1.4. Pegar o valor do estado dentro do gerador de lista
    1.5. Criar os campos de nota.criacao e nota.modificacao (alem das nota.favorita e nota.tags)
    1.6. Aplicar o tratamento dentro do array (sort) de acordo com o estado atual
    1.7. As notas devem ser ordenadas antes de serem filtradas (busca)
  2. Menu de opções dos cards (Três pontinhos)
    * Excluir
    * Favoritar/desfavoritar
    * Copiar
  3. Sistema de copiar conteudo da nota
  4. Campo de notas favoritadas (No topo)
  5. Sistema de favritar ou desfavoritar notas
  6. Criar lixeira para notas apagadas
  7. Ferramentas de personalização das notas
    * Adidionar link
    * Adicionar imagem
    * Adicionar linha
    * Adicionar negrito
    * Adicionar italico
    * Adicionar riscado
    * Adicionar tabela...
  7. Campo de tags/cadernos (Cria, filtrar)
  8. Sistema de atribuição de tags/cadernos
  9. Visualização em blocos (?)
  10. Armazenamento local com SQLite
  12. Criar notas criptografadas
*/

/* FEATURES DE LONGO PRAZO
 * Adicionar sistema de notas rápidas (Direto da Home)
 * Adicionar sistema de expansão e retração das notas na Home (onLongPress?)
 * Adicionar seleção individual ou multipla de notas (onLongPress?)
 * Adicionar personalização para texto selecionado (Aplicar personalização ao texto existente)
 * Adicionar manipulação drag and drop (Ordenamento personalizado das notas)
 * Adicionar a exibição do markdown de forma simultânea (Como nas anotações do TickTick)
 * Adicionar suporte a check-list com markdown (Talvez seja necessário mudar a biblioteca de markdown)
 * Adicionar o check de itens do check-list no markdown (Não sei se é possível)
 * Adicionar personalização de estilo das notas (Não sei se é possível)
  * Tamanho da fonte
  * Familia da fonte
  * Cor de fundo
  * Cor da fonte
  * Cor do background
 * Adicionar suporte multimidia (Não sei se é possível)
  * Audio
  * Imagem
  * Vídeo
  * Desenho
 * Dar opção de nota de áudio na forma transcrita (Não sei se é possível)
 */

/* PROBLEMAS DO INTERPRETADOR
  1. Não pega multiplas quebras de linha
  2. Não dá margem superior ou inferior na linha horizontal
  3. Precisa de uma separação entre a linha horizontal e o texto anterior
  4. Não reconhece o check-list
*/

import React from "react";
import Home from "./src/screens/Home";
import Nota from "./src/screens/Nota";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotasContextProvider } from "./src/context/NotasContext";
import { RootStackProps } from "./src/interface/Screens";
import { COLORS } from "./src/styles/Colors";

const Stack = createNativeStackNavigator<RootStackProps>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.statusBar} />
      <NotasContextProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Nota" component={Nota} />
        </Stack.Navigator>
      </NotasContextProvider>
    </NavigationContainer>
  );
}
