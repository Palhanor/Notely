/* PADRONIZAÇÃO
  1. Padronizar estilos comuns (menu da Home e botão de salvar nota)
  2. Fazer mais componentização (Botão redondo flutuante, card da Home e da visualização de Nota)
*/

/* FEATURES DE CURTO PRAZO
  1. Sistema de busca
  2. Sistema de ordenamento
  3. Ferramentas de personalização das notas
    * Link
    * Imagem
    * Linha
    * Negrito
    * Italico
    * Riscado
    * Tabela...
  4. Campo de notas favoritadas (No topo)
  5. Menu de opções dos cards
    * Excluir
    * Favoritar/desfavoritar
    * Tags/cadernos
    * Selecionar
  6. Sistema de favritar ou desfavoritar notas (Menu dos cards)
  7. Campo de tags/cadernos (Cria, filtrar)
  8. Sistema de atribuição de tags/cadernos
  9. Criar lixeira para notas apagadas
  10. Menu de ferramentas das notas
    * Editar
    * Visualizar
    * Salvar
    * Ferrametnas (Personalização)
  11. Visualização em blocos (?)
  12. Armazenamento local com SQLite
*/

/* FEATURES DE LONGO PRAZO
 * Adicionar sistema de notas rápidas (Direto da Home)
 * Adicionar sistema de expansão e retração das notas na Home (onLongPress?)
 * Adicionar seleção multipla de itens (onLongPress?)
 * Adicionar personalização para texto selecionado (Aplicar personalização ao texto existente)
 * Adicionar uma tipografia personalizada para o app (Header, notas)
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
import { COLORS } from "./src/utils/Colors";

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
